package com.emed.services;

import java.util.List;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.DoctorEditDto;
import com.emed.dtos.DoctorDto;

public interface DoctorService {

    ApiResponse removeDoctor(Long doctorId);

    ApiResponse updateDoctor(DoctorEditDto doctorEditDto);

    List<DoctorDto> getAllDoctors();

}
