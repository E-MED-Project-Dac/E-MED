package com.emed.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emed.entities.Doctor;

public interface DoctorDAO extends JpaRepository<Doctor, Long>{
List<Doctor> findByIsApprovedTrueAndIsDeletedFalse();
    List<Doctor> findByIsVerifiedFalseAndIsDeletedFalse();

}
