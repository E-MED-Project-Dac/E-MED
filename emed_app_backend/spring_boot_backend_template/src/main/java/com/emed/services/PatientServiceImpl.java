package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.daos.PatientDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Patient;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class PatientServiceImpl implements PatientService {

	private final PatientDAO patientDao;
	private final ModelMapper modelMapper;
	@Override
	public ApiResponse addNewPatient(RegisterDTO patientDto) {
		
		Patient newPatient = modelMapper.map(patientDto, Patient.class);
		patientDao.save(newPatient);
		return new ApiResponse("Patient registered Successfullt...!");
	}
}
