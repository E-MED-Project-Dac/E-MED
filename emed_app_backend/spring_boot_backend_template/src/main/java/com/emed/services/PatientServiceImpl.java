package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.InvalidInputException;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.PatientDAO;
import com.emed.dtos.ApiResponse;

import com.emed.dtos.PatientDTO;
import com.emed.dtos.PatientEditDTO;
import com.emed.dtos.PatientResponseDTO;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Patient;
import com.emed.entities.PatientAddress;

import lombok.AllArgsConstructor;


@Service
@Transactional
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

	private final PatientDAO patientDao;
	private final ModelMapper modelMapper;


	@Override
	public ApiResponse deletePatient(Long patientId) {
		Patient patient = patientDao.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient Not Found !!!!"));
		patient.setDeleted(true);
		patient.getUser().setDeleted(true);
		return new ApiResponse("Deleted Patients Details successfully...!");
	}

	@Override
	public ApiResponse updatePatient(Long patientId, PatientDTO dto) {
		Patient entity = patientDao.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Patient !!!!"));
		modelMapper.map(dto, entity);
		PatientAddress address = entity.getAddress();
		modelMapper.map(dto, address);	
		//To Set updated address back in patient
		entity.setAddress(address);

		//to Save patient (address will come through cascade)
		patientDao.save(entity);
		return new ApiResponse("Updated Patients Details");
     }

	@Override
	public PatientResponseDTO getPatient(Long patientId) {
		return modelMapper.map(patientDao.findById(patientId).orElseThrow(() -> new ResourceNotFoundException("Patient Not Found !!!!")), PatientResponseDTO.class);
	}

	@Override
	public ApiResponse updatePatient(PatientEditDTO editPatient) {
		Patient patient = patientDao.findById(editPatient.getPatientId()).orElseThrow(() -> new ResourceNotFoundException("Patient Not Found !!!!"));
		modelMapper.map(editPatient, patient);
		return new ApiResponse("User Updated Successfully");
	}
}