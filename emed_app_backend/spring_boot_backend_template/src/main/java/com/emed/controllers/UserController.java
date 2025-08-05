package com.emed.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.RegisterDTO;
import com.emed.services.UserService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController @RequestMapping("/user") @AllArgsConstructor
public class UserController {

	private final UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody RegisterDTO entity) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.register(entity));
	}
	
}
