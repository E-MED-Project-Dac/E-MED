package com.emed.services;


import com.emed.dtos.ApiResponse;
import com.emed.dtos.PatientDto;
import com.emed.dtos.RegisterDto;

public interface PatientService {

	ApiResponse addNewPatient(RegisterDto patientDto);

	ApiResponse deletePatient(Long patientId);

	ApiResponse updatePatient(Long patientId, PatientDto dto);

}
