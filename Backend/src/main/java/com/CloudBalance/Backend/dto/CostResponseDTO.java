package com.CloudBalance.Backend.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.Map;

@Data
public class CostResponseDTO {
    private String service;
    private Map<String, Double> monthlyCost = new LinkedHashMap<>();
}
