package com.emed.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.LoginDto;
import com.emed.dtos.LoginResponseDto;
import com.emed.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
	
	private final UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto loginDto){
		LoginResponseDto response = userService.login(loginDto);
		return ResponseEntity.ok(response);
	}
	
}
