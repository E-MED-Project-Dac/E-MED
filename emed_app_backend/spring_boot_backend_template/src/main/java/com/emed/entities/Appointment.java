package com.emed.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="appointment_id")
	private Long appointmentId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="doctor_id" , nullable = false)
	private Doctor  doctor;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="patient_id" , nullable = false)
	private Patient patient;
	
	@Column(name="first_name", length=15)
    private String firstName;

	@Column(name="last_name", length=15)
    private String lastName; 
	
	private LocalDate dob;
	
	@Column(name="date_of_appointment")
	private LocalDate dateOfAppointment;
	
	@Column(name="time_slot")
	private String timeSlot;
	
	@Column( length=15)
	private String mobile;
	
	@Column(length=50)
    private String email;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	
	public Appointment(Doctor doctor, Patient patient, String firstName, String lastName, LocalDate dob,
			LocalDate dateOfAppointment, String timeSlot, String mobile, String email) {
		super();
		this.doctor = doctor;
		this.patient = patient;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.dateOfAppointment = dateOfAppointment;
		this.timeSlot = timeSlot;
		this.mobile = mobile;
		this.email = email;
		this.status=Status.PENDING;
	}
	
	
}
