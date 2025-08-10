package com.emed.services;


import com.emed.dtos.ApiResponse;
import com.emed.dtos.PatientDTO;
import com.emed.dtos.PatientEditDTO;
import com.emed.dtos.PatientResponseDTO;


public interface PatientService {

	ApiResponse deletePatient(Long patientId);

	ApiResponse updatePatient(Long patientId, PatientDTO dto);

	PatientResponseDTO getPatient(Long patientId);

	ApiResponse updatePatient(PatientEditDTO editPatient);

}
