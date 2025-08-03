package com.emed.services;

import org.springframework.stereotype.Service;

import com.emed.daos.AdminDAO;

import com.emed.daos.DoctorDAO;
import com.emed.daos.PatientDAO;
import com.emed.dtos.LoginDto;
import com.emed.dtos.LoginResponseDto;
import com.emed.entities.Admin;
import com.emed.entities.Doctor;
import com.emed.entities.Patient;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private final AdminDAO adminDao = null;
	private final DoctorDAO doctorDao = null;
	private final PatientDAO patientDao = null;
	@Override
	public LoginResponseDto login(LoginDto loginDto) {
		// TODO Auto-generated method stub
		
		//check 
		Admin admin = adminDao.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (admin != null) {
            return new LoginResponseDto(true, "Admin login successful", "admin");
        }
        
        //check doctor
        
        Doctor doctor = doctorDao.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (doctor != null) {
            return new LoginResponseDto(true, "Doctor login successful", "doctor");
        }
		
        // Check patient
        Patient patient = patientDao.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (patient != null) {
            return new LoginResponseDto(true, "Patient login successful", "patient");
        }

        return new LoginResponseDto(false, "Invalid credentials", null);
    }
}


