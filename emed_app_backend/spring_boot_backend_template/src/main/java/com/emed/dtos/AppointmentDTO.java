package com.emed.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AppointmentDTO {
    private String firstName;

    private String lastName; 
	
	private LocalDate dob;
	
	private LocalDate dateOfAppointment;
	
	private String timeSlot;

	private String mobile;
	
    private String email;
}
