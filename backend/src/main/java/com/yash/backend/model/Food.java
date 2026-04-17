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

    // getters and setters
}