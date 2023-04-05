package com.healthcare.patientbackend.repository;

import com.healthcare.patientbackend.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff,Long> {
}
