package com.CloudBalance.Backend.controller;

import com.CloudBalance.Backend.dto.CostResponseDTO;
import com.CloudBalance.Backend.service.CostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/dashboard")
public class CostController {

    private final CostService costService;

    public CostController(CostService costService) {
        this.costService = costService;
    }

    @GetMapping("/costs")
    public List<CostResponseDTO> getServiceMonthlyCost() {
        System.out.println("Coast details api hit");
        return costService.getServiceMonthlyCostTable();
    }
}
