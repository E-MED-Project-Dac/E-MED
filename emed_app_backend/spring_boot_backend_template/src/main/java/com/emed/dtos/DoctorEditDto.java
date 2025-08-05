package com.emed.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorEditDto {
	private Long doctorId;
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private String mobile;
	private String email;
	private String specialization;
	private String clinicName;
	private String qualification;
	private String clinicAddress;
	private String licenseNumber;
	private String city;
}
