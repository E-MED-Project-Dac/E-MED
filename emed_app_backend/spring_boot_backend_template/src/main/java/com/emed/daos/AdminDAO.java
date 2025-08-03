package com.emed.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emed.entities.Admin;

public interface AdminDAO extends JpaRepository<Admin, Long>{
	Admin findByEmailAndPassword(String email , String password);
}
