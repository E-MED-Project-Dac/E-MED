package com.emed.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.RegisterDto;
import com.emed.services.DoctorService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/doctor")
@AllArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;

    @PostMapping
    public ResponseEntity<?> addDoctor(@RequestBody RegisterDto doctorDto){
    return ResponseEntity.status(HttpStatus.CREATED).body(doctorService.addNewDoctor(doctorDto));
    }
    
    @PutMapping("/{doctorId}")
    public ResponseEntity<?> removeDoctor( @PathVariable Long doctorId){
    return ResponseEntity.status(HttpStatus.OK).body(doctorService.removeDoctor(doctorId));
}
}