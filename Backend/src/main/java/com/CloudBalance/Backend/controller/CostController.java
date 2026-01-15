package com.CloudBalance.Backend.controller;

import com.CloudBalance.Backend.dto.CostRequestDTO;
import com.CloudBalance.Backend.dto.GroupByResponseDTO;
import com.CloudBalance.Backend.service.CostService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/dashboard")
public class CostController {

    private final CostService costService;

    public CostController(CostService costService) {
        this.costService = costService;
    }

    @PostMapping("/grouped")
    public ResponseEntity<List<GroupByResponseDTO>> getGroupedCost(@Valid @RequestBody CostRequestDTO requestDTO){
        return ResponseEntity.ok(costService.getMonthlyCostByService(requestDTO));
    }
}
