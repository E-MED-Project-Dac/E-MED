package com.emed.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter  @NoArgsConstructor
@Entity
public class Patient extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="patient_id")
    private Long patientId;
	
	@Column(name="first_name", length=15)
    private String firstName;

	@Column(name="last_name", length=15)
    private String lastName; 
	
	private LocalDate dob;
	
	@Column( length=15)
	private String mobile;
	
	@Column(length=50)
    private String email;
	
	@Column(length=300)
    private String password;
	
	@Column(name="is_deleted")
    private boolean isDeleted;

	public Patient(String firstName, String lastName, LocalDate dob, String mobile, String email, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}	
	
}
