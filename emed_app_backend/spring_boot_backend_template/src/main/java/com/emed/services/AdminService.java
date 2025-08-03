package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDto;

public interface AdminService {

	ApiResponse addNewAdmin(RegisterDto adminDto);

}
