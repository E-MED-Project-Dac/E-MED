package com.emed.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DoctorBasicDetailsDTO {
	
		private Long doctorDetailsId;
		

		private String specialization;

		private String licenceNo;
		
		private String qualification;
		
		private Integer yearsOfExperience;
		

}
