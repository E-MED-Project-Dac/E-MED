package com.emed.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.AppointmentDTO;
import com.emed.services.AppointmentService;

import lombok.AllArgsConstructor;

@RestController @RequestMapping @AllArgsConstructor
public class AppointmentController {
	
	   private final AppointmentService appointmentService;
	   
	   @PostMapping("/{patientId}")
	    public ResponseEntity<?> bookAppointment( @PathVariable Long patientId , @RequestBody AppointmentDTO appointment) {
	            return ResponseEntity.ok(appointmentService.bookAppointment(patientId,appointment));
	    }
	
	 @GetMapping("patientHome/upcomingAppointmentList/{patientId}")
	    public ResponseEntity<?>getUpcomingAppointments(@PathVariable Long patientId){
	        return ResponseEntity.ok(appointmentService.getUpcomingAppointments(patientId));
	    }
	 
	 @GetMapping("patientHome/allAppointmentList/{patientId}")
	    public ResponseEntity<?>getAllAppointments(@PathVariable Long patientId){
	        return ResponseEntity.ok(appointmentService.getAllAppointments(patientId));
	    }
	 
	 @PutMapping("/{patientId}/cancel")
	    public ResponseEntity<?> cancelAppointment(@PathVariable Long patientId) {
	     
	            return ResponseEntity.ok(appointmentService.cancelAppointment(patientId));
	    }
	    
	    @PutMapping("/{patientId}/reschedule")
	    public ResponseEntity<?> rescheduleAppointment( @PathVariable Long patientId , @RequestBody AppointmentDTO appointment) {
	            return ResponseEntity.ok(appointmentService.rescheduleAppointment(patientId,appointment));
	    }
	    
	    @GetMapping("doctorHome/appointmentList/{doctorId}")
	    public ResponseEntity<?>getDoctorAppointments(@PathVariable Long doctorId){
	        return ResponseEntity.ok(appointmentService.getDoctorAppointments(doctorId));
	    }
	    
	    @GetMapping("doctorHome/bookedAppointmentList/{doctorId}")
	    public ResponseEntity<?>getBookedAppointments(@PathVariable Long doctorId){
	        return ResponseEntity.ok(appointmentService.getBookedAppointments(doctorId));
	    }
}
