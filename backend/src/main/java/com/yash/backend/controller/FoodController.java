package com.yash.backend.controller;

import com.yash.backend.model.Food;
import com.yash.backend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;
import com.yash.backend.service.S3Service;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService service;

    @Autowired
    private S3Service s3Service;

    @PostMapping
    public Food addFood(@Valid @RequestBody Food food) {
        return service.addFood(food);
    }

    @GetMapping
    public List<Food> getAll() {
        return service.getAllFoods();
    }

    @PostMapping("/upload")
    public String uploadImage() {

        String url = s3Service.uploadFile("D:/apple.jpg", "apple.jpg");

        return url;
    }

    @PostMapping("/add-with-image")
    public Food addFoodWithImage(
            @RequestParam("name") String name,
            @RequestParam("calories") int calories,
            @RequestParam("file") org.springframework.web.multipart.MultipartFile file
    ) throws java.io.IOException {

        // Step 1: Convert MultipartFile → File
        String fileName = file.getOriginalFilename();
        java.io.File tempFile = new java.io.File(
                System.getProperty("java.io.tmpdir") + "/" + fileName
        );
        file.transferTo(tempFile);

        // Step 2: Upload to S3
        String url = s3Service.uploadFile(tempFile.getAbsolutePath(), fileName);

        // Step 3: Save in DB
        Food food = new Food();
        food.setName(name);
        food.setCalories(calories);
        food.setImageUrl(url);

        return service.addFood(food);
    }
}