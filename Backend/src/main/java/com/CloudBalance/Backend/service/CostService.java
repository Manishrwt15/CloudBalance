package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.CostRequestDTO;
import com.CloudBalance.Backend.dto.CostResponseDTO;
import com.CloudBalance.Backend.dto.GroupByResponseDTO;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CostService {

    List<GroupByResponseDTO> getMonthlyCostByService(@Valid CostRequestDTO requestDTO);
}
