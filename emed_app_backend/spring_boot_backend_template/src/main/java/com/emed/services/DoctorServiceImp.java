package com.emed.services;

import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.DoctorDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.DoctorAvailabilityDTO;
import com.emed.dtos.DoctorEditDto;
import com.emed.dtos.DoctorDto;
import com.emed.entities.Doctor;
import com.emed.entities.DoctorAvailability;
import com.emed.entities.DoctorBasicDetails;
import com.emed.entities.DoctorClinicDetails;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class DoctorServiceImp implements DoctorService {

	private final DoctorDAO doctorDao;
	private final ModelMapper modelMapper;

	private final ObjectMapper objectMapper;
	

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
	public ApiResponse updateAvailability(DoctorAvailabilityDTO availabilityDTO) {
		try {
            Doctor doctor = doctorDao.findById(availabilityDTO.getDoctorId()).orElseThrow(() -> new RuntimeException("Doctor not found"));
            DoctorAvailability availability = modelMapper.map(availabilityDTO, DoctorAvailability.class);
            
            //Convert List<String> to JSON using Jackson
            availability.setAvailableDays(objectMapper.writeValueAsString(availabilityDTO.getAvailableDays()));

            //Combine times into a slot
            availability.setTimeSlot(availabilityDTO.getStartTime() + "-" + availabilityDTO.getEndTime());
            return new ApiResponse("Availability updated successfully!");
        } catch (Exception e) {
            return new ApiResponse("Error: " + e.getMessage());
        }
	}

	


	@Override
	public List<DoctorDto> getAllDoctors() {
		return doctorDao.findByIsVerifiedFalseAndIsDeletedFalse()
				.stream()
				.map(entity -> modelMapper.map(entity, DoctorDto.class))
				.toList();
	}

	@Override
	public DoctorDto getDoctors(Long doctorId) {
		return modelMapper.map(doctorDao.findById(doctorId),DoctorDto.class);
	}

	

}
