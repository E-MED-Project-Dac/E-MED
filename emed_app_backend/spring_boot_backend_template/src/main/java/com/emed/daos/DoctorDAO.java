package com.emed.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Doctor;
import com.emed.entities.User;

public interface DoctorDAO extends JpaRepository<Doctor, Long>{
    List<Doctor> findByIsVerifiedTrueAndIsDeletedFalse();
    
    List<Doctor> findByIsVerifiedFalseAndIsDeletedFalse();
    
	Optional<Doctor> findByUser(User user);

}
