package com.healthcare.patientbackend.controller;

import com.healthcare.patientbackend.exception.PatientNotFoundException;
import com.healthcare.patientbackend.model.Patient;
import com.healthcare.patientbackend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patient")
    Patient newPatient(@RequestBody Patient newPatient) {
        return patientRepository.save(newPatient);
    }

    @GetMapping("/patients")
    List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    @GetMapping("/patient/{id}")

    Patient getPatientById(@PathVariable Long id){
        return patientRepository.findById(id)
                .orElseThrow(()->new PatientNotFoundException(id));
    }

    @PutMapping("/patient/{id}")
    Patient updatePatient(@RequestBody Patient newPatient, @PathVariable Long id){
        return patientRepository.findById(id)
                .map(patient -> {
                    patient.setUsername(newPatient.getUsername());
                    patient.setEmail(newPatient.getEmail());
                    patient.setPhone(newPatient.getPhone());
                    return patientRepository.save(patient);
                }).orElseThrow(()->new PatientNotFoundException(id));
    }

    @DeleteMapping("/patient/{id}")
    String deletePatient(@PathVariable Long id){
        if(!patientRepository.existsById(id)){
            throw new PatientNotFoundException(id);
        }

        patientRepository.deleteById(id);

        return "Patient with id " + id + " has been deleted.";
    }

}


