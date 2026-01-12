package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.CostResponseDTO;
import com.CloudBalance.Backend.repository.CostRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class CostServiceImpl implements CostService {

    private final CostRepository costRepository;

    public CostServiceImpl(CostRepository costRepository) {
        this.costRepository = costRepository;
    }

    @Override
    public List<CostResponseDTO> getServiceMonthlyCostTable() {
        List<Map<String, Object>> raw = costRepository.getServiceMonthlyCost();
        Map<String, CostResponseDTO> result = new LinkedHashMap<>();

        for (Map<String, Object> row : raw) {
            String service = row.get("SERVICE").toString();
            String month = row.get("MONTH").toString();
            Double cost = ((Number) row.get("TOTAL_COST")).doubleValue();

            result.putIfAbsent(service, new CostResponseDTO());
            CostResponseDTO dto = result.get(service);
            dto.setService(service);
            dto.getMonthlyCost().put(month, cost);
        }

        return new ArrayList<>(result.values());
    }
}
