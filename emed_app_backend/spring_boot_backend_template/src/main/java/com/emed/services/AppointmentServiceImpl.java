package com.emed.services;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.daos.AppointmentDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.AppointmentDTO;
import com.emed.entities.Appointment;
import com.emed.entities.Status;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

private final AppointmentDAO appointmentDao;
private final ModelMapper modelMapper;
	
	@Override
	public List<Appointment> getUpcomingAppointments(Long patientId) {
		List<Status> status =new ArrayList<>();
		status.addAll(Arrays.asList(Status.ACCEPTED,Status.PENDING,Status.RESCHEDULED));
		return appointmentDao.getUpcomingAppointments(patientId , status);
	}
      
	@Override
    public ApiResponse cancelAppointment(Long patientId) {
        Appointment cancelAppointment = appointmentDao.findById(patientId)
            .orElseThrow(() -> new IllegalStateException("Appointment not found"));
        cancelAppointment.setStatus(Status.CANCELLED);
         return new ApiResponse("Cancelled successfully...!!");
    }

	@Override
	public ApiResponse rescheduleAppointment(Long patientId, AppointmentDTO appointment) {
		 Appointment rescheduleAppointment = appointmentDao.findById(patientId)
				 .orElseThrow(() -> new IllegalStateException("Appointment not found"));
		 modelMapper.map(appointment, rescheduleAppointment);
		return new ApiResponse("Rescheduled successfully...!!");
	}

	@Override
	public List<Appointment> getAllAppointments(Long patientId) {	
		return  appointmentDao.getAllAppointments(patientId);	
	}

	@Override
	public ApiResponse bookAppointment(Long patientId, AppointmentDTO appointment) {

		Appointment newAppointment = modelMapper.map(appointment, Appointment.class);
		newAppointment.setStatus(Status.PENDING);
		appointmentDao.save(newAppointment);
		return new ApiResponse("Booked successfully...!!");
	}

	@Override
	public List<Appointment> getDoctorAppointments(Long doctorId) {
		Status status = Status.PENDING;
		return appointmentDao.findByStatusAndDoctorId(status , doctorId);
	}

	@Override
	public List<Appointment> getBookedAppointments(Long doctorId) {
		Status status = Status.ACCEPTED;
		return appointmentDao.findByStatusAndDoctorId(status , doctorId);
	}
    
}
