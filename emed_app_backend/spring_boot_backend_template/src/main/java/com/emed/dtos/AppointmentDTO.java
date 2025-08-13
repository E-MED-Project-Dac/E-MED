package com.emed.dtos;

import java.time.LocalDate;

import com.emed.entities.Gender;
import com.emed.entities.Status;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AppointmentDTO {
	
	private Long patientId;
	
    private String firstName;

    private String lastName; 
    
    private Gender gender;
	
	private LocalDate dob;
	
	private LocalDate dateOfAppointment;
	
	private String timeSlot;

	private String mobile;
	
    private String email;
    
}
