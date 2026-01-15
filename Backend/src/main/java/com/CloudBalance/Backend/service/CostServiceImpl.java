package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.CostRequestDTO;
import com.CloudBalance.Backend.dto.GroupByResponseDTO;
import com.CloudBalance.Backend.repository.CostRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class CostServiceImpl implements  CostService{

    private final CostRepository costRepository;

    public CostServiceImpl(CostRepository costRepository) {
        this.costRepository = costRepository;
    }

    private BigDecimal toBigDecimal(Object value) {
        return value == null ? BigDecimal.ZERO : BigDecimal.valueOf(((Number) value).doubleValue());
    }


    @Override
    public List<GroupByResponseDTO> getMonthlyCostByService(CostRequestDTO requestDTO) {

        List<Map<String, Object>> rows = costRepository.fetchMonthlyCost(requestDTO.getStartDate(), requestDTO.getEndDate(), requestDTO.getGroupBy(), requestDTO.getFilters(), requestDTO.getAccountId());

        LinkedHashMap<String, LinkedHashMap<String, BigDecimal>> serviceMap = new LinkedHashMap<>();
        for (Map<String, Object> row : rows) {
            String month = row.get("MONTH").toString();
            String groupKey = row.get("GROUP_KEY").toString();
            BigDecimal cost = toBigDecimal(row.get("TOTAL_COST"));

            serviceMap.computeIfAbsent(groupKey, k -> new LinkedHashMap<>()).put(month, cost);
        }

        return serviceMap.entrySet().stream().map(e -> new GroupByResponseDTO(e.getKey(), e.getValue())).toList();
    }
}
