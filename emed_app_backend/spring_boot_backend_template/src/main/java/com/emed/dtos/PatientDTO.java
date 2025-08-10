package com.emed.dtos;

import java.time.LocalDate;
import com.emed.entities.Gender;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientDTO  {
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String mobile;
    private String email;
    private String password;
    private Gender gender;
    private String state;
    private String city;
    private String pincode;
    private String address;
}
