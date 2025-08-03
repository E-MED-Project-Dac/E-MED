package com.emed.services;

import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.daos.AdminDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.RegisterDto;
import com.emed.entities.Admin;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final AdminDAO adminDao;
	private final ModelMapper modelMapper;
	@Override
	public ApiResponse addNewAdmin(RegisterDto adminDto) {
		
		Admin newAdmin = modelMapper.map(adminDto, Admin.class);
		adminDao.save(newAdmin);
		return new ApiResponse("Admin registered Successfullt...!");
	}
}
