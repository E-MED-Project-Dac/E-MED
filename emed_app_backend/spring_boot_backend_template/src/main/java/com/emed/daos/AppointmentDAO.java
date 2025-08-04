package com.emed.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.emed.entities.Appointment;
import com.emed.entities.Status;

public interface AppointmentDAO extends JpaRepository<Appointment, Long> {
	
    List<Appointment> findByPatient_PatientIdAndStatusIn(Long patientId , List<Status> status);
	
    List<Appointment> findByPatient_PatientId(Long patientId);

	List<Appointment> findByStatusAndDoctor_DoctorId(Status status, Long doctorId);
}