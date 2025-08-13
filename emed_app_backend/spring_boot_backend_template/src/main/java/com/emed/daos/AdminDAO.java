package com.emed.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emed.entities.Admin;
import com.emed.entities.User;

public interface AdminDAO extends JpaRepository<Admin, Long>{

	Optional<Admin> findByUser(User user);

}
