package com.emed.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter  @NoArgsConstructor
@Entity
public class Doctor extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doctor_id")
    private Long doctorId;
	
	@Column(name="first_name", length=15)
    private String firstName;

	@Column(name="last_name", length=15)
    private String lastName; 
	
	private LocalDate dob;
	
	@Column( length=15)
	private String mobile;
	
	@Column(length=50)
    private String email;
	
	@Column(length=300)
    private String password; 
	
    @Enumerated(EnumType.STRING)
    private Gender gender;
	
	@Column(name="is_verified")
    private boolean isVerified;

	@Column(name="is_deleted")
    private boolean isDeleted;
	
	@OneToOne(cascade = CascadeType.ALL)
	private DoctorBasicDetails basicDetails;
	
	@OneToOne(cascade = CascadeType.ALL)
	private DoctorClinicDetails clinicDetails;
	
	@OneToMany
	private List<Appointment> appointments = new ArrayList<>();
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User user;

	public Doctor(String firstName, String lastName, LocalDate dob, String mobile, String email, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}

	
	public  void addAppointmentToDoctor(Appointment appointment) {
		this.appointments.add(appointment);
		appointment.setDoctor(this);
	}
	

	public  void removeAppointmentFromDoctor(Appointment appointment) {
		this.appointments.remove(appointment);
		appointment.setDoctor(null);
	}
}
