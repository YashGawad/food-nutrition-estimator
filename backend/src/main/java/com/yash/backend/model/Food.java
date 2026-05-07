package com.yash.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "food")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Food name cannot be empty")
    private String name;

    @Min(value = 1, message = "Calories must be greater than 0")
    private int calories;

    // Nutrition fields
    private double protein;
    private double carbs;
    private double fat;

    // S3 image URL
    @Column(name = "image_url")
    private String imageUrl;

    // -----------------------------
    // Getters
    // -----------------------------

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getCalories() {
        return calories;
    }

    public double getProtein() {
        return protein;
    }

    public double getCarbs() {
        return carbs;
    }

    public double getFat() {
        return fat;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    // -----------------------------
    // Setters
    // -----------------------------

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public void setProtein(double protein) {
        this.protein = protein;
    }

    public void setCarbs(double carbs) {
        this.carbs = carbs;
    }

    public void setFat(double fat) {
        this.fat = fat;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}