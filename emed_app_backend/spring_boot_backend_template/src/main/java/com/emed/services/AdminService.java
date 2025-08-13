package com.emed.services;

import com.emed.dtos.AdminDTO;
import com.emed.entities.Admin;
import com.emed.entities.User;

public interface AdminService {
	AdminDTO getAdmin(Long adminId);

	Admin findByUser(User user);
}
