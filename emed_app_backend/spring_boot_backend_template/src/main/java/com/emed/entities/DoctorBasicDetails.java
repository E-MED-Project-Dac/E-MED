package com.emed.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor
@Table(name="doctor_basic_details")
public class DoctorBasicDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doctor_details_id")
	private Long doctorDetailsId;
	
	@OneToOne(mappedBy = "basicDetails")
	@JoinColumn(name="doctor_id")
	private Doctor doctor;
	
	@Column(length=50)
	private String specialization;
	
	
	@Column(name="licence_no",length=16,unique = true,nullable = false)
	private String licenceNo;
	
	private String qualification;
	
	
	@Column(name="years_of_experience")
	private Integer yearsOfExperience;

	public DoctorBasicDetails(Doctor doctor, String specialization, String licenceNo, String qualification,
			String institute, @Min(1900) @Max(2100) Integer yearOfGraduation, Integer yearsOfExperience) {
		super();
		this.doctor = doctor;
		this.specialization = specialization;
		this.licenceNo = licenceNo;
		this.qualification = qualification;
		this.yearsOfExperience = yearsOfExperience;
	}
	
	
}
