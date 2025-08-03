package com.emed.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.emed.custom_exceptions.ResourceNotFoundException;
import com.emed.dtos.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
		System.out.println("in catch - Res not found exc");
		return ResponseEntity.status(HttpStatus.NOT_FOUND)// SC 404
				.body(new ApiResponse(e.getMessage()));
	}
}
