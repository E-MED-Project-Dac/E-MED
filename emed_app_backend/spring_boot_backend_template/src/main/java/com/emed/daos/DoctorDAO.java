package com.emed.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Doctor;

public interface DoctorDAO extends JpaRepository<Doctor, Long>{

}
