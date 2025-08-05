package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.DoctorAvailabilityDTO;
import com.emed.dtos.DoctorEditDto;
import com.emed.dtos.RegisterDTO;

public interface DoctorService {

    ApiResponse removeDoctor(Long doctorId);
    ApiResponse updateDoctor(DoctorEditDto doctorEditDto);
    ApiResponse updateAvailability(DoctorAvailabilityDTO availabilityDTO);
}
