package com.emed.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.daos.UserDAO;
import com.emed.dtos.LoginDTO;
import com.emed.dtos.LoginResponseDTO;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.Admin;
import com.emed.entities.Doctor;
import com.emed.entities.Patient;
import com.emed.entities.User;
import com.emed.security.JwtUtils;
import com.emed.services.AdminService;
import com.emed.services.DoctorService;
import com.emed.services.PatientService;
import com.emed.services.UserService;

import lombok.AllArgsConstructor;

import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController @RequestMapping("/user") @AllArgsConstructor
@CrossOrigin(origins =  "http://localhost:5173")
public class UserController {

    private final ModelMapper modelMapper;
	private final UserService userService;
	private final DoctorService doctorService;
	private final PatientService patientService;
	private final AdminService adminService;
	private final AuthenticationManager authenticationManager;
	private final JwtUtils jwtUtils;

	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody RegisterDTO entity) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.register(entity));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO userDto) {
	    try {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword()));
			var jwt = jwtUtils.generateJwtToken(authentication);
			User user = (User)authentication.getPrincipal();
			LoginResponseDTO responseDto = new LoginResponseDTO();
			modelMapper.map(user, responseDto);
			 switch (user.getRole()) {
	            case ROLE_DOCTOR:
	                Doctor doctor = doctorService.findByUser(user); 
	                responseDto.setId(doctor.getDoctorId());
	                responseDto.setFirstName(doctor.getFirstName());
	                responseDto.setLastName(doctor.getLastName());
	                break;
	            case ROLE_ADMIN:
	                Admin admin = adminService.findByUser(user);
	                responseDto.setId(admin.getAdminId());
	                responseDto.setFirstName(admin.getFirstName());
	                responseDto.setLastName(admin.getLastName());
	                break;
	            case ROLE_PATIENT:
	                Patient patient = patientService.findByUser(user);
	                responseDto.setId(patient.getPatientId());
	                responseDto.setFirstName(patient.getFirstName());
	                responseDto.setLastName(patient.getLastName());
	                break;
	            default:
	                throw new RuntimeException("Unknown role");
	        }
			responseDto.setJwt(jwt);
			return ResponseEntity.ok(responseDto);
		}catch (DisabledException e) {
	        // Handle soft-deleted users
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	            .body(Map.of(
	                "error", "Account deactivated. Contact support.",
	                "status", HttpStatus.UNAUTHORIZED.value()
	            ));
	    } catch (AuthenticationException e) {
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
			            .body(
			                Map.of(
			                    "error", "Invalid email or password",
			                    "status", HttpStatus.UNAUTHORIZED.value()
			                )
			            );
		}
	}
	
}
