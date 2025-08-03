package com.emed.entities;

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
@Getter
@Setter
@AllArgsConstructor
@Table(name="doctor_clinic_details")
public class DoctorClinicDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="doctor_clinic_id")
	private Long clinicId;
	
	@Column(length=50)
	private String clinicName;
	
	@Column(length=20)
	private String state;
	
	@Column(length=20)
	private String city;
	
	@JoinColumn(name="doctor_id")
	@OneToOne
	private Doctor doctor;
	
	@Column(length = 6)
	private String pincode;
	
	@Column(name="local_address")
	private String localAddress;
	
	@Column(name="clinic_mobile",length=15)
	private String mobile;
	
}
