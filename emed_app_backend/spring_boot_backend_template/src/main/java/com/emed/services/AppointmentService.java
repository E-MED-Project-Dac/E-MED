package com.emed.services;

import java.util.List;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.AppointmentDTO;
import com.emed.entities.Appointment;

public interface AppointmentService {
List<Appointment> getUpcomingAppointments(Long patientId);

ApiResponse cancelAppointment(Long patientId);

ApiResponse rescheduleAppointment(Long patientId, AppointmentDTO appointment);

List<Appointment> getAllAppointments(Long patientId);

ApiResponse bookAppointment(Long patientId, AppointmentDTO appointment);

List<Appointment> getDoctorAppointments(Long doctorId);

List<Appointment> getBookedAppointments(Long doctorId);
}