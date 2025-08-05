package com.emed.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emed.entities.User;

public interface UserDAO extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	boolean existsByEmail(String email);

}
