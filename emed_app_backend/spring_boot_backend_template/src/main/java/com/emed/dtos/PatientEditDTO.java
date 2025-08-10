package com.emed.dtos;

import java.time.LocalDate;
import com.emed.entities.Gender;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientEditDTO{
	private Long patientId;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String mobile;
    private Gender gender;
    private AddressDTO address;
}
