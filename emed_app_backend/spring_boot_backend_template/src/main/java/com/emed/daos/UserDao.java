package com.emed.daos;

import java.util.Optional;

import com.emed.entities.User;

public interface UserDao {

	Optional<User> findByEmail(String email);

}
