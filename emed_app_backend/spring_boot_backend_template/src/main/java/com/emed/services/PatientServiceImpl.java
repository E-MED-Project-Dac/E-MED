package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.InvalidInputException;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.PatientDAO;
import com.emed.dtos.ApiResponse;

import com.emed.dtos.PatientDto;
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
	public ApiResponse addNewPatient(RegisterDTO patientDto) {
		if (patientDao.existsByEmail(patientDto.getEmail())) {
			throw new InvalidInputException("Duplicate Patient Exist");
		}
		Patient entity = modelMapper.map(patientDto, Patient.class);
		entity.setDeleted(false);
		patientDao.save(entity);
		return new ApiResponse("new Patient Added Successfully ");
	}

	@Override
	public ApiResponse deletePatient(Long patientId) {
		Patient patient = patientDao.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient Not Found !!!!"));
		patient.setDeleted(true);
		return new ApiResponse("Deleted Patients Details");
	}

	@Override
	public ApiResponse updatePatient(Long patientId, PatientDto dto) {
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
}