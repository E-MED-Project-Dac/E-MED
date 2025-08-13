package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.AdminDAO;
import com.emed.dtos.AdminDTO;
import com.emed.entities.Admin;
import com.emed.entities.User;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final AdminDAO adminDao;
	private final ModelMapper modelMapper;

	@Override
	public AdminDTO getAdmin(Long adminId) {
		return modelMapper.map(adminDao.findById(adminId),AdminDTO.class);
	}

	@Override
	public Admin findByUser(User user) {
		return adminDao.findByUser(user).orElseThrow(()-> new ResourceNotFoundException("Admin data not found"));
	}
}
