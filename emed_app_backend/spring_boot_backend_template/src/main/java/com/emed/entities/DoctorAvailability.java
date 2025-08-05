package com.emed.entities;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="doctor_availability")
@Getter
@Setter
@AllArgsConstructor
public class DoctorAvailability {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name="doctor_id")
	private Doctor doctor;
	
	@Column(columnDefinition="JSON")
	private String availableDays;
	
	private String timeSlot;
	
	private Double consultationFee;
}
