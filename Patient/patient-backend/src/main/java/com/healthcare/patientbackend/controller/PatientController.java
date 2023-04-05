package com.healthcare.patientbackend.controller;

import com.healthcare.patientbackend.model.Patient;
import com.healthcare.patientbackend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patient")
    Patient newPatient(@RequestBody Patient newPatient) {
        return patientRepository.save(newPatient);
    }
}
