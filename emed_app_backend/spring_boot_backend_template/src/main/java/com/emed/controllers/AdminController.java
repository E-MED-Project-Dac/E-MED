package com.emed.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.emed.dtos.DoctorDto;
import com.emed.services.AdminService;
import com.emed.services.DoctorService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/adminHome")
@AllArgsConstructor
public class AdminController {

    private final AdminService adminService;
    private final DoctorService doctorService;

    @GetMapping("/approveDoctors")
    public ResponseEntity<?> getAllUnVerifiedDoctor() {
        List<DoctorDto> unVerifiedDoctors = doctorService.getAllDoctors();
        if (unVerifiedDoctors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(unVerifiedDoctors);
    }

}
