package com.CloudBalance.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GroupByResponseDTO {

    private String groupKey;
    private Map<String, BigDecimal> monthlyCost;

}
