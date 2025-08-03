package com.emed.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BaseDto {
    private LocalDate creationDate;
    private LocalDateTime updatedOn;
}
