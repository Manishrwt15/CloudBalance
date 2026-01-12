package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.CostResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CostService {
    List<CostResponseDTO> getServiceMonthlyCostTable();
}
