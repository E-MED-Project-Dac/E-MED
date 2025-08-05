package com.emed.dtos;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorAvailabilityDTO {
	private Long doctorId;
	private List<String> availableDays;
	private String startTime;
	private String endTime;
	private Double consultationFee;
}
