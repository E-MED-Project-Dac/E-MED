package com.emed.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter  @NoArgsConstructor
@Entity
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doctor_id")
    private Long doctorId;
	
	@Column(name="first_name", length=15)
    private String firstName;

	@Column(name="last_name", length=15)
    private String lastName; 
	
	@Column( length=15)
	private String mobile;
	
	@Column(length=50)
    private String email;
	
	@Column(length=300)
    private String password;
	
	@Transient
	private String confirmPassword;
	
	@Enumerated(EnumType.STRING)
    private Role role;
	
	@Column(name="is_verified")
    private boolean isVerified;

	@Column(name="is_deleted")
    private boolean isDeleted;

	
	
	
}
