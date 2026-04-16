package com.yash.backend.controller;

import com.yash.backend.model.Food;
import com.yash.backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodRepository repo;

    @PostMapping
    public Food addFood(@RequestBody Food food) {
        return repo.save(food);
    }

    @GetMapping
    public List<Food> getAll() {
        return repo.findAll();
    }
}