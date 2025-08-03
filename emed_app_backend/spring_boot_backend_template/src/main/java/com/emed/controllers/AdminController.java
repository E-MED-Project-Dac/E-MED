package com.emed.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.emed.services.AdminService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {

    private final AdminService adminService;
	
    
}
