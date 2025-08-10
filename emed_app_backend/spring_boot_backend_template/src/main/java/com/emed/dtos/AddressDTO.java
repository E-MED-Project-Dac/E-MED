package com.emed.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AddressDTO {
	
	private String state;

	private String city;

	private String pincode;

	private String localAddress;
}
