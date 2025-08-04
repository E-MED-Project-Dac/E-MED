package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;

public interface PatientService {

	ApiResponse addNewPatient(RegisterDTO patientDto);

}
