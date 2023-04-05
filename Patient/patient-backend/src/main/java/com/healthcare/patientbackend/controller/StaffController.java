package com.healthcare.patientbackend.controller;

import com.healthcare.patientbackend.model.Staff;
import com.healthcare.patientbackend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaffController {

    @Autowired
    private StaffRepository staffRepository;

    @PostMapping("/employee")
    Staff newEmployee(@RequestBody Staff newStaff){
        return staffRepository.save(newStaff);
    }
}
