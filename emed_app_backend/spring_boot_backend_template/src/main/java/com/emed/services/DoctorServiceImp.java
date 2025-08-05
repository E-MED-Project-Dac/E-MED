package com.emed.services;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.DoctorDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Doctor;
import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class DoctorServiceImp implements DoctorService {

	private final DoctorDAO doctorDao;
	private final ModelMapper modelMapper;
	
	@Override
	public ApiResponse removeDoctor(Long doctorId) {

		Doctor doctor = doctorDao.findById(doctorId).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		doctor.setDeleted(true);
		return new ApiResponse("Doctor deleted successfully");
	}

}
