package com.yash.backend.service;

import org.springframework.stereotype.Service;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.nio.file.Paths;

@Service
public class S3Service {

    private final String bucketName = "nutrition-images-yash";

    private final S3Client s3 = S3Client.builder()
            .region(Region.EU_NORTH_1)
            .build();

    // 🔥 THIS METHOD WAS MISSING
    public String uploadFile(String filePath, String key) {

    PutObjectRequest request = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();

    s3.putObject(request, Paths.get(filePath));

    // 🔥 RETURN URL
    return "https://" + bucketName + ".s3.amazonaws.com/" + key;
}
}