package com.emed.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponseDto {
	private boolean success;
	private String message;
	private String userType; // "admin" , "doctor" or "patient"
}
