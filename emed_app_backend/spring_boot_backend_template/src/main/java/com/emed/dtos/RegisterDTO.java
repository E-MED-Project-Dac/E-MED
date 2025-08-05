package com.emed.dtos;

import java.time.LocalDate;

import com.emed.entities.Gender;
import com.emed.entities.Role;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterDTO {
	
private String firstName;

private String lastName;

private LocalDate dob;

private String mobile;

private String password;

private String email;

private Gender gender;

private Role role;
}
