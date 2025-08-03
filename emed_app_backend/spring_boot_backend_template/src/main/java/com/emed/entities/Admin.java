package com.emed.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor
public class Admin extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private Long adminId;

    @Column(name = "first_name", length = 30)
    private String firstName;

    @Column(name = "last_name", length = 30)
    private String lastName;

    @Column(length = 15)
    private String mobile;

    @Column(length = 50)
    private String email;
    @Column(length = 300)
    private String password;
    @Column(name = "is_deleted")
    private boolean isDeleted;

    private LocalDate dob;
    
    @Enumerated(EnumType.STRING)
    private Gender gender;
    
    @OneToOne
	@JoinColumn(name="user_id")
	private User user;
    
	public Admin(String firstName, String lastName, String mobile, String email, String password, LocalDate dob,
			Gender gender) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.gender = gender;
	}

    
}
