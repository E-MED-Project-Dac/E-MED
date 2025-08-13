package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.DisabledException;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.InvalidInputException;
import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.AdminDAO;
import com.emed.daos.DoctorDAO;
import com.emed.daos.PatientDAO;
import com.emed.daos.UserDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Admin;
import com.emed.entities.Doctor;
import com.emed.entities.Patient;
import com.emed.entities.Role;
import com.emed.entities.User;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserDAO userDao;
	private final ModelMapper modelMapper;
	private final DoctorDAO doctorDao;
	private final PatientDAO patientDao;
	private final AdminDAO adminDao;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public ApiResponse register(RegisterDTO entity) {
		if(userDao.existsByEmail(entity.getEmail())) {
			throw new InvalidInputException("Duplicate user Exist");
		}
		else {
			User user = modelMapper.map(entity, User.class);
			String encodedPass = passwordEncoder.encode(user.getPassword());
			user.setPassword(encodedPass);
			User persistUser = userDao.save(user);
			if((entity.getRole()==Role.ROLE_ADMIN)) {
				Admin admin = modelMapper.map(entity, Admin.class);
				admin.setUser(persistUser);
				adminDao.save(admin);
			}
			else if((entity.getRole()==Role.ROLE_DOCTOR)) {
				Doctor doctor = modelMapper.map(entity, Doctor.class);
				doctor.setUser(persistUser);
				doctorDao.save(doctor);
			}
			else {
				Patient patient = modelMapper.map(entity, Patient.class);
				patient.setUser(persistUser);
				patientDao.save(patient);
			}
		}
		return new ApiResponse("User registered Successfullly...!");
	}
	
	
	@Override
	public User loadUserByUserName(String userEmail) {
		User user =  userDao.findByEmail(userEmail).orElseThrow(() -> new ResourceNotFoundException("User not found"));
	    if(user.isDeleted()) {
	    	throw new DisabledException("Account is deleted");
	    }
	    return user;
	}

}
