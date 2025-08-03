package com.emed.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Patient;

public interface PatientDAO extends JpaRepository<Patient, Long> {
    List<Patient> findByIsDeletedFalse();

    boolean existsByEmail(String email);

}
