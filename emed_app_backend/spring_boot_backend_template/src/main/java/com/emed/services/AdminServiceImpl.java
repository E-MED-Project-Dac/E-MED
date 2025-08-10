package com.emed.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.daos.AdminDAO;
import com.emed.dtos.AdminDTO;
import com.emed.dtos.ApiResponse;
import com.emed.entities.Admin;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final AdminDAO adminDao;
	private final ModelMapper modelMapper;

	@Override
	public AdminDTO getAdmin(Long adminId) {
		return modelMapper.map(adminDao.findById(adminId),AdminDTO.class);
	}
}
