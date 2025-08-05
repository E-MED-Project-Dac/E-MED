package com.emed.services;

import java.util.List;

import com.emed.dtos.ApiResponse;
import com.emed.dtos.AppointmentDTO;
import com.emed.dtos.ResponseAppointmentDTO;
import com.emed.entities.Appointment;

public interface AppointmentService {
List<ResponseAppointmentDTO> getUpcomingAppointments(Long patientId);

ApiResponse cancelAppointment(Long appointmentId);

ApiResponse rescheduleAppointment(Long patientId, ResponseAppointmentDTO appointment);

List<ResponseAppointmentDTO> getAllAppointments(Long patientId);

ApiResponse bookAppointment(Long doctorId, AppointmentDTO appointment);

List<ResponseAppointmentDTO> getDoctorAppointments(Long doctorId);

List<ResponseAppointmentDTO> getBookedAppointments(Long doctorId);

ApiResponse acceptAppointments(Long appointmentId);

ApiResponse rejectAppointments(Long appointmentId);
}