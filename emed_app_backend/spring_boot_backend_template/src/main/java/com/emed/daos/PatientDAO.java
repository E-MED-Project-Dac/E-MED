package com.emed.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Patient;

public interface PatientDAO extends JpaRepository<Patient, Long>{

}
