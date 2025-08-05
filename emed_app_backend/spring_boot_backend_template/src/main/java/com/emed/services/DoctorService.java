package com.emed.services;

import java.util.List;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Doctor;

public interface DoctorService {

	ApiResponse addNewDoctor(RegisterDTO doctorDto);
    ApiResponse removeDoctor(Long doctorId);
	List<Doctor> getAvailableDoctors();

}
