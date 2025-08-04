package com.emed.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.InvalidInputException;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.PatientDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.PatientDto;
import com.emed.entities.Patient;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

	private final PatientDAO patientDao;
	private final ModelMapper modelMapper;

	@Override
	public ApiResponse addNewPatient(PatientDto dto) {
		if (patientDao.existsByEmail(dto.getEmail())) {
			throw new InvalidInputException("Duplicate Patient Exist");
		}
		Patient entity = modelMapper.map(dto, Patient.class);
		entity.setDeleted(false);
		Patient persistEntity = patientDao.save(entity);
		return new ApiResponse("Added new Patient Successfully with ID " + persistEntity.getPatientId());
	}

	@Override
	public ApiResponse deletePatient(Long patientId) {
		Patient patient = patientDao.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient Not Found  - Invalid Id !!!!"));
		patient.setDeleted(true);
		return new ApiResponse("Deleted Patients Details");
	}

	@Override
	public ApiResponse updatePatient(Long patientId, PatientDto dto) {
		Patient entity = patientDao.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Patient ID !!!!"));
		modelMapper.map(dto, entity);
		return new ApiResponse("Updated Patients Details");
	}
}
