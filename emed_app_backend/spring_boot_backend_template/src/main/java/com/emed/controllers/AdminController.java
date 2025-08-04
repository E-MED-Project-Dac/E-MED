package com.emed.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.RegisterDTO;
import com.emed.services.AdminService;
import lombok.AllArgsConstructor;

@RestController @RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {

    private final AdminService adminService;
	

    @PostMapping
    public ResponseEntity<?> addAdmin(@RequestBody RegisterDTO adminDto){
    return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addNewAdmin(adminDto));
}
}
