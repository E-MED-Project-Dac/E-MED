package com.emed.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.emed.services.PatientService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/patient")
@AllArgsConstructor
public class PatientController {

    private final PatientService patientService;
	
    
}
