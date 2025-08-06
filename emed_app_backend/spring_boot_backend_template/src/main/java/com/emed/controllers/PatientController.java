package com.emed.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.RegisterDTO;
import com.emed.services.DoctorService;
import com.emed.services.PatientService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/patientHome")
@AllArgsConstructor
@CrossOrigin(origins =  "http://localhost:5173")
public class PatientController {

    private final PatientService patientService;
    private final DoctorService doctorService;


     @GetMapping("/doctorsList")
     public ResponseEntity<?> getAvailableDoctors(){
    	 return ResponseEntity.ok(doctorService.getAvailableDoctors());
     }
}
