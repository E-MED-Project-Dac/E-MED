package com.emed.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterDto {
	
private String firstName;

private String lastName;

private LocalDate dob;

private String mobile;

private String password;

private String email;
}
