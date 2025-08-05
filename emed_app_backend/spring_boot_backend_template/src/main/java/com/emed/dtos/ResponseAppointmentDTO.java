package com.emed.dtos;

import java.time.LocalDate;

import com.emed.entities.Patient;
import com.emed.entities.Status;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ResponseAppointmentDTO {

	private Long appointmentId;
	
    private String firstName;

    private String lastName; 
	
	private LocalDate dob;
	
	private LocalDate dateOfAppointment;
	
	private String timeSlot;

	private String mobile;
	
    private String email;
    
    private Status status;
}
