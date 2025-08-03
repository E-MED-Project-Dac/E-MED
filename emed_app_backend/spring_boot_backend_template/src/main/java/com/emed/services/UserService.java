package com.emed.services;

import com.emed.dtos.LoginDto;
import com.emed.dtos.LoginResponseDto;

public interface UserService {
	LoginResponseDto login(LoginDto loginDto);
}
