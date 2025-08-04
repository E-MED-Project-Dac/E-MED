package com.emed.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.emed.entities.Appointment;
import com.emed.entities.Status;

public interface AppointmentDAO extends JpaRepository<Appointment, Long> {
	
	@Query("select a from appointment a where a.patientId:patientId and a.status in:status")
    List<Appointment> getUpcomingAppointments(Long patientId , List<Status> status);
	
	@Query("select a from appointment a where a.patientId:patientId")
    List<Appointment> getAllAppointments(Long patientId );

	List<Appointment> findByStatusAndDoctorId(Status status, Long doctorId);
}