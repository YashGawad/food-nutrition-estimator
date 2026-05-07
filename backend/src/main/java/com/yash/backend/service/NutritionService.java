package com.yash.backend.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class NutritionService {

  public Map<String, Double> getNutrition(String foodName) {

    Map<String, Double> nutrition = new HashMap<>();

    switch (foodName.toLowerCase()) {

      case "biryani":
        nutrition.put("calories", 290.0);
        nutrition.put("protein", 11.0);
        nutrition.put("carbs", 35.0);
        nutrition.put("fat", 12.0);
        break;

      case "dosa":
        nutrition.put("calories", 168.0);
        nutrition.put("protein", 4.0);
        nutrition.put("carbs", 18.0);
        nutrition.put("fat", 7.0);
        break;

      case "idli":
        nutrition.put("calories", 58.0);
        nutrition.put("protein", 2.0);
        nutrition.put("carbs", 12.0);
        nutrition.put("fat", 0.4);
        break;

      case "samosa":
        nutrition.put("calories", 262.0);
        nutrition.put("protein", 4.0);
        nutrition.put("carbs", 31.0);
        nutrition.put("fat", 13.0);
        break;

      default:
        nutrition.put("calories", 100.0);
        nutrition.put("protein", 2.0);
        nutrition.put("carbs", 10.0);
        nutrition.put("fat", 5.0);
    }

    return nutrition;
  }
}