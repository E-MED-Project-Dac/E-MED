package com.emed.services;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.AdminDTO;
import com.emed.dtos.RegisterDTO;

public interface AdminService {
	AdminDTO getAdmin(Long adminId);
}
