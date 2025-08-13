package com.emed.services;

//import org.springframework.security.core.userdetails.UserDetails;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;
import com.emed.entities.User;

public interface UserService {

	ApiResponse register(RegisterDTO entity);

	User loadUserByUserName(String user);

}
