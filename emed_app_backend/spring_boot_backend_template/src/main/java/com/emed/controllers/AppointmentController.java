package com.emed.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emed.dtos.AppointmentDTO;
import com.emed.dtos.ResponseAppointmentDTO;
import com.emed.services.AppointmentService;

import lombok.AllArgsConstructor;

@RestController @RequestMapping @AllArgsConstructor
@CrossOrigin(origins =  "http://localhost:5173")
public class AppointmentController {
	
	   private final AppointmentService appointmentService;
	   
	   @PostMapping("/patientHome/bookAppointment/{doctorId}")
	    public ResponseEntity<?> bookAppointment( @PathVariable Long doctorId , @RequestBody AppointmentDTO appointment) {
	            return ResponseEntity.status(HttpStatus.CREATED).body(appointmentService.bookAppointment(doctorId,appointment));
	    }
	
	 @GetMapping("/patientHome/upcomingAppointmentList/{patientId}")
	    public ResponseEntity<?>getUpcomingAppointments(@PathVariable Long patientId){
	        return ResponseEntity.ok(appointmentService.getUpcomingAppointments(patientId));
	    }
	 
	 @GetMapping("/patientHome/allAppointmentList/{patientId}")
	    public ResponseEntity<?>getAllAppointments(@PathVariable Long patientId){
	        return ResponseEntity.ok(appointmentService.getAllAppointments(patientId));
	    }
	 
	 @PutMapping("/patientHome/cancel/{appointmentId}")
	    public ResponseEntity<?> cancelAppointment(@PathVariable Long appointmentId) {
	     
	            return ResponseEntity.ok(appointmentService.cancelAppointment(appointmentId));
	    }
	    
	    @PutMapping("/patientHome/reschedule")
	    public ResponseEntity<?> rescheduleAppointment( @RequestBody ResponseAppointmentDTO appointment) {
	            return ResponseEntity.ok(appointmentService.rescheduleAppointment(appointment));
	    }
	    
	    @GetMapping("/doctorHome/appointmentList/{doctorId}")
	    public ResponseEntity<?>getDoctorAppointments(@PathVariable Long doctorId){
	        return ResponseEntity.ok(appointmentService.getDoctorAppointments(doctorId));
	    }
	    
	    @GetMapping("/doctorHome/bookedAppointmentList/{doctorId}")
	    public ResponseEntity<?>getBookedAppointments(@PathVariable Long doctorId){
	        return ResponseEntity.ok(appointmentService.getBookedAppointments(doctorId));
	    }
	    
	    @PutMapping("/doctorHome/acceptAppointment/{appointmentId}")
	    public ResponseEntity<?>acceptAppointments(@PathVariable Long appointmentId){
	        return ResponseEntity.ok(appointmentService.acceptAppointments(appointmentId));
	    }
	    
	    @PutMapping("/doctorHome/rejectAppointment/{appointmentId}")
	    public ResponseEntity<?>rejectAppointments(@PathVariable Long appointmentId){
	        return ResponseEntity.ok(appointmentService.acceptAppointments(appointmentId));
	    }
	    
	    @GetMapping("/appointment/{appointmentId}")
	    public ResponseEntity<?>getAppointment(@PathVariable Long appointmentId){
	        return ResponseEntity.ok(appointmentService.getAppointment(appointmentId));
	    }
}
