package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDto;

public interface PatientService {

	ApiResponse addNewPatient(RegisterDto patientDto);

}
