package com.emed.services;

import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.DoctorDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.DoctorEditDto;
import com.emed.dtos.DoctorDto;
import com.emed.entities.Doctor;
import com.emed.entities.DoctorBasicDetails;
import com.emed.entities.DoctorClinicDetails;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class DoctorServiceImp implements DoctorService {

	private final DoctorDAO doctorDao;
	private final ModelMapper modelMapper;

	@Override
	public ApiResponse removeDoctor(Long doctorId) {

		Doctor doctor = doctorDao.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));
		doctor.setDeleted(true);
		doctor.setVerified(false);
		return new ApiResponse("Doctor deleted successfully");
	}
	
	@Override
	public List<DoctorDto> getAvailableDoctors() {
		return doctorDao.findByIsVerifiedTrueAndIsDeletedFalse()
				.stream()
				.map(entity -> modelMapper.map(entity, DoctorDto.class))
				.toList();
	}

	@Override
	public ApiResponse updateDoctor(Long doctorId , DoctorEditDto doctorEditDto) {
		Doctor existingDoctor = doctorDao.findById(doctorId)
				.orElseThrow(() -> new RuntimeException("Doctor Not Found"));
		modelMapper.map(doctorEditDto, existingDoctor);
		DoctorBasicDetails basicDetails = modelMapper.map(doctorEditDto, DoctorBasicDetails.class);
		DoctorClinicDetails clinicDetails = modelMapper.map(doctorEditDto, DoctorClinicDetails.class);
		existingDoctor.setBasicDetails(basicDetails);
		existingDoctor.setClinicDetails(clinicDetails);
		return new ApiResponse("Updated successfully...!");
	}

	@Override
	public List<DoctorDto> getAllDoctors() {
		return doctorDao.findByIsVerifiedFalseAndIsDeletedFalse()
				.stream()
				.map(entity -> modelMapper.map(entity, DoctorDto.class))
				.toList();
	}

}
