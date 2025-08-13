package com.emed.dtos;

import com.emed.entities.Role;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LoginResponseDTO {
    private Long id;
    private String firstName;
    private String lastName;
	private String email;
	private Role role;
	private String jwt;
}
