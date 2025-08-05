package com.emed.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorEditDto {
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private String mobile;
	private String password;
	private String specialization;
	private String clinicName;
	private String state;
	private String city;
	private String pincode;
	private String clinicMobile;
	private String clinicAddress;
	private String qualification;
	private Integer yearOfExperience;
	private String licenceNo;
	
}
