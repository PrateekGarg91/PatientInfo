package com.healthcare.patientbackend.repository;

import com.healthcare.patientbackend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient,Long>{
}
