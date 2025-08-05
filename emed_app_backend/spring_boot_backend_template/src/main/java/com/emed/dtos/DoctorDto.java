package com.emed.dtos;

import java.time.LocalDate;

import com.emed.entities.DoctorBasicDetails;
import com.emed.entities.DoctorClinicDetails;
import com.emed.entities.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class DoctorDto extends BaseDto {
    private Long doctorId;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String mobile;
    private String email;
    private String password;
    private Gender gender;
    private DoctorBasicDetails basicDetails;
    private DoctorClinicDetails clinicDetails;
}
