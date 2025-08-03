package com.emed.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientDto extends BaseDto {
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String mobile;
    private String email;
    private String password;
}
