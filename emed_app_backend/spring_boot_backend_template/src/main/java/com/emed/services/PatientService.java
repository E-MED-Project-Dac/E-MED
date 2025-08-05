package com.emed.services;


import com.emed.dtos.ApiResponse;
import com.emed.dtos.PatientDto;
import com.emed.dtos.RegisterDTO;


public interface PatientService {

	ApiResponse deletePatient(Long patientId);

	ApiResponse updatePatient(Long patientId, PatientDto dto);

}
