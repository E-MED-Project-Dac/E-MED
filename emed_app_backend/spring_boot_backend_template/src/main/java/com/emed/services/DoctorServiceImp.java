package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.daos.DoctorDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDto;
import com.emed.entities.Doctor;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class DoctorServiceImp implements DoctorService {

	private final DoctorDAO doctorDao;
	private final ModelMapper modelMapper;
	@Override
	public ApiResponse addNewDoctor(RegisterDto doctorDto) {
		
		Doctor newDoctor = modelMapper.map(doctorDto, Doctor.class);
		doctorDao.save(newDoctor);
		return new ApiResponse("Doctor registered Successfullt...!");
	}

}
