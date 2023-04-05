package com.healthcare.patientbackend.repository;

import com.healthcare.patientbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
