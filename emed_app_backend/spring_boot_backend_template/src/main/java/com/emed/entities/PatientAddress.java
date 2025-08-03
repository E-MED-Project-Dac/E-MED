package com.emed.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor
@Table(name="patient_address")
public class PatientAddress {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="address_id")
	private Long addressId;
	
	@Column(length=20)
	private String state;
	
	@Column(length=15)
	private String city;
	
	@Column(length=6)
	private Character pincode;
	
	@Column(length=300)
	private String localAddress;
	
}
