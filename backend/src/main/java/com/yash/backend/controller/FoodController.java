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
        s3Service.uploadFile("D:\\apple.jpg", "apple.jpg");
        return "Uploaded successfully";
    }
}