package com.emed.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.RegisterDto;
import com.emed.services.PatientService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/patient")
@AllArgsConstructor
public class PatientController {

    private final PatientService patientService;
    
    @PostMapping
    public ResponseEntity<?> addPatient(@RequestBody RegisterDto patientDto){
    return ResponseEntity.status(HttpStatus.CREATED).body(patientService.addNewPatient(patientDto));
}
    
}
