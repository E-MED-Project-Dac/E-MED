package com.emed.dtos;

import java.time.LocalDate;
import com.emed.entities.Gender;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DoctorDto extends BaseDto {
    private Long doctorId;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String mobile;
    private String email;
    private String password;
    private Gender gender;
    private DoctorBasicDetailsDTO basicDetails;
    private DoctorClinicDetailsDTO clinicDetails;
}
