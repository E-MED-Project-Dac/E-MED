package com.emed.services;

import java.util.List;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.DoctorAvailabilityDTO;
import com.emed.dtos.DoctorEditDto;
import com.emed.entities.Doctor;
import com.emed.entities.User;
import com.emed.dtos.DoctorDto;

public interface DoctorService {

    ApiResponse removeDoctor(Long doctorId);
  
    ApiResponse updateAvailability(DoctorAvailabilityDTO availabilityDTO);
  
	  List<DoctorDto> getAvailableDoctors();

    ApiResponse updateDoctor(Long doctorId , DoctorEditDto doctorEditDto);

    List<DoctorDto> getAllDoctors();

	DoctorDto getDoctors(Long doctorId);

	Doctor findByUser(User user);


}
