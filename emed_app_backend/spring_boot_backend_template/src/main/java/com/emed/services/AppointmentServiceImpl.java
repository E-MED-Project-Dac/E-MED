package com.emed.services;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.daos.AppointmentDAO;
import com.emed.daos.DoctorDAO;
import com.emed.daos.PatientDAO;
import com.emed.dtos.ApiResponse;
import com.emed.dtos.AppointmentDTO;
import com.emed.dtos.DoctorDto;
import com.emed.dtos.ResponseAppointmentDTO;
import com.emed.entities.Appointment;
import com.emed.entities.Doctor;
import com.emed.entities.Patient;
import com.emed.entities.Status;

import lombok.AllArgsConstructor;

@Service @Transactional @AllArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

private final AppointmentDAO appointmentDao;
private final DoctorDAO doctorDao;
private final PatientDAO patientDao;
private final ModelMapper modelMapper;
	
	@Override
	public List<ResponseAppointmentDTO> getUpcomingAppointments(Long patientId) {
		List<Status> status =new ArrayList<>();
		status.addAll(Arrays.asList(Status.ACCEPTED,Status.PENDING,Status.RESCHEDULED));
		return appointmentDao.findByPatient_PatientIdAndStatusIn(patientId , status)
				.stream()
				.map(appointmment -> modelMapper.map(appointmment, ResponseAppointmentDTO.class))
				.toList();
	}
      
	@Override
    public ApiResponse cancelAppointment(Long appointmentId) {
        Appointment cancelAppointment = appointmentDao.findById(appointmentId)
            .orElseThrow(() -> new IllegalStateException("Appointment not found"));
        cancelAppointment.setStatus(Status.CANCELLED);
         return new ApiResponse("Cancelled successfully...!!");
    }

	@Override
	public ApiResponse rescheduleAppointment(Long appointmentId, ResponseAppointmentDTO appointment) {
		 Appointment rescheduleAppointment = appointmentDao.findById( appointmentId)
				 .orElseThrow(() -> new IllegalStateException("Appointment not found"));
		 modelMapper.map(appointment, rescheduleAppointment);
		 rescheduleAppointment.setStatus(Status.RESCHEDULED);
		return new ApiResponse("Rescheduled successfully...!!");
	}

	@Override
	public List<ResponseAppointmentDTO> getAllAppointments(Long patientId) {	
		return  appointmentDao.findByPatient_PatientId(patientId)
				.stream()
				.map(appointmment -> modelMapper.map(appointmment, ResponseAppointmentDTO.class))
				.toList();	
	}

	@Override
	public ApiResponse bookAppointment(Long doctorId, AppointmentDTO appointment) {
         Doctor doctor = doctorDao.findById(doctorId).orElseThrow(()->new ResourceNotFoundException("Invalid doctor id"));
         Patient patient = patientDao.findById(appointment.getPatientId()).orElseThrow(()->new ResourceNotFoundException("Invalid patient id"));
		Appointment newAppointment = modelMapper.map(appointment, Appointment.class);
		newAppointment.setDoctor(doctor);
		newAppointment.setPatient(patient);
		newAppointment.setStatus(Status.PENDING);	
		appointmentDao.save(newAppointment);
		return new ApiResponse("Booked successfully...!!");
	}


		@Override
		public List<ResponseAppointmentDTO> getDoctorAppointments(Long doctorId) {
		    Status status = Status.PENDING;
		    return appointmentDao.findByStatusAndDoctor_DoctorId(status, doctorId)
		    		.stream()
					.map(appointment ->  modelMapper.map(appointment, ResponseAppointmentDTO.class))
		            .toList();
		}

	@Override
	public List<ResponseAppointmentDTO> getBookedAppointments(Long doctorId) {
		Status status = Status.ACCEPTED;
		return appointmentDao.findByStatusAndDoctor_DoctorId(status , doctorId)
				.stream()
				.map(appointment ->  modelMapper.map(appointment, ResponseAppointmentDTO.class))
	            .toList();
	}

	@Override
	public ApiResponse acceptAppointments(Long appointmentId) {
		Appointment appointment = appointmentDao.findById(appointmentId).orElseThrow(()->new ResourceNotFoundException("Appointment  not found"));
		appointment.setStatus(Status.ACCEPTED);
		return new ApiResponse("appointment accepted");
	}
	
	@Override
	public ApiResponse rejectAppointments(Long appointmentId) {
		Appointment appointment = appointmentDao.findById(appointmentId).orElseThrow(()->new ResourceNotFoundException("Appointment  not found"));
		appointment.setStatus(Status.REJECTED);
		return new ApiResponse("appointment rejected");
	}
    
}
