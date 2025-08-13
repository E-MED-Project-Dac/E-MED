package com.emed.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Patient;
import com.emed.entities.User;

public interface PatientDAO extends JpaRepository<Patient, Long> {
	
    List<Patient> findByIsDeletedFalse();
    
    boolean existsByEmail(String email);
    
	Optional<Patient> findByUser(User user);

}
