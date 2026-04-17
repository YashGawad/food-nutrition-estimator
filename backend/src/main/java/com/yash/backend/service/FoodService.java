package com.yash.backend.service;

import com.yash.backend.model.Food;
import com.yash.backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository repo;

    public Food addFood(Food food) {
        return repo.save(food);
    }

    public List<Food> getAllFoods() {
        return repo.findAll();
    }
}