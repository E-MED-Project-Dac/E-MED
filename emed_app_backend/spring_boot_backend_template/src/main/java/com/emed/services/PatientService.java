package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.LoginDto;
import com.emed.dtos.LoginResponseDto;
import com.emed.dtos.RegisterDto;

public interface PatientService {

	ApiResponse addNewPatient(RegisterDto patientDto);

}
