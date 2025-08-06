package com.emed.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DoctorClinicDetailsDTO {
	
	private Long clinicId;
	
	private String clinicName;

	private String state;

	private String city;

	private String pincode;
	
	private String clinicAddress;

	private String clinicMobile;	
	
}
