package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDto;

public interface DoctorService {

	ApiResponse addNewDoctor(RegisterDto doctorDto);

	ApiResponse removeDoctor(Long doctorId);

}
