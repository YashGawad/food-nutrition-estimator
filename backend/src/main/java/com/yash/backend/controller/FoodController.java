package com.yash.backend.controller;

import com.yash.backend.model.Food;
import com.yash.backend.service.FoodService;
import com.yash.backend.service.S3Service;
import com.yash.backend.service.NutritionService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "*")
public class FoodController {

        @Autowired
        private FoodService service;

        @Autowired
        private S3Service s3Service;

        @Autowired
        private NutritionService nutritionService;

        // -----------------------------
        // Add food manually
        // -----------------------------
        @PostMapping
        public Food addFood(@Valid @RequestBody Food food) {
                return service.addFood(food);
        }

        // -----------------------------
        // Get all foods
        // -----------------------------
        @GetMapping
        public List<Food> getAll() {
                return service.getAllFoods();
        }

        // -----------------------------
        // Test S3 upload
        // -----------------------------
        @PostMapping("/upload")
        public String uploadImage() {

                String url = s3Service.uploadFile("D:/apple.jpg", "apple.jpg");

                return url;
        }

        // -----------------------------
        // Manual add with image
        // -----------------------------
        @PostMapping("/add-with-image")
        public Food addFoodWithImage(
                        @RequestParam("name") String name,
                        @RequestParam("calories") int calories,
                        @RequestParam("file") org.springframework.web.multipart.MultipartFile file)
                        throws java.io.IOException {

                // Convert MultipartFile → File
                String fileName = file.getOriginalFilename();

                java.io.File tempFile = new java.io.File(
                                System.getProperty("java.io.tmpdir") + "/" + fileName);

                file.transferTo(tempFile);

                // Upload to S3
                String url = s3Service.uploadFile(
                                tempFile.getAbsolutePath(),
                                fileName);

                // Save food
                Food food = new Food();

                food.setName(name);
                food.setCalories(calories);
                food.setImageUrl(url);

                return service.addFood(food);
        }

        // -----------------------------
        // AI Auto Detect
        // -----------------------------
        @PostMapping("/auto-detect")
        public Food autoDetectFood(
                        @RequestParam("file") org.springframework.web.multipart.MultipartFile file)
                        throws java.io.IOException {

                // Step 1: Save temp file
                String fileName = file.getOriginalFilename();

                java.io.File tempFile = new java.io.File(
                                System.getProperty("java.io.tmpdir") + "/" + fileName);

                file.transferTo(tempFile);

                // Step 2: Upload image to S3
                String imageUrl = s3Service.uploadFile(
                                tempFile.getAbsolutePath(),
                                fileName);

                // Step 3: Call Python AI API
                RestTemplate restTemplate = new RestTemplate();

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.MULTIPART_FORM_DATA);

                org.springframework.util.MultiValueMap<String, Object> body = new org.springframework.util.LinkedMultiValueMap<>();

                body.add(
                                "file",
                                new org.springframework.core.io.FileSystemResource(tempFile));

                HttpEntity<org.springframework.util.MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(
                                body,
                                headers);

                ResponseEntity<Map> response = restTemplate.postForEntity(
                                "https://ai-food-nutrition-estimator.onrender.com/predict",
                                requestEntity,
                                Map.class);

                // Step 4: Get predicted food
                String predictedFood = (String) response.getBody().get("food");

                // Step 5: Get nutrition values
                Map<String, Double> nutrition = nutritionService.getNutrition(predictedFood);

                // Step 6: Save food in DB
                Food food = new Food();

                food.setName(predictedFood);

                food.setCalories(
                                nutrition.get("calories").intValue());

                food.setProtein(
                                nutrition.get("protein"));

                food.setCarbs(
                                nutrition.get("carbs"));

                food.setFat(
                                nutrition.get("fat"));

                food.setImageUrl(imageUrl);

                return service.addFood(food);
        }

        @DeleteMapping("/{id}")
        public void deleteFood(@PathVariable Long id) {
                service.deleteFood(id);
        }
}