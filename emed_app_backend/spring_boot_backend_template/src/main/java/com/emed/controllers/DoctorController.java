package com.emed.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.emed.services.DoctorService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/doctor")
@AllArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;
	
    
}
