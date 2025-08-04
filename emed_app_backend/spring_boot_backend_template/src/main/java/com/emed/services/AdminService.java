package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDTO;

public interface AdminService {

	ApiResponse addNewAdmin(RegisterDTO adminDto);

}
