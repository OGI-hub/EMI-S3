package emi.revision.dossier_medical.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emi.revision.dossier_medical.model.Patient;
import emi.revision.dossier_medical.service.PatientService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping("getAll")
    public List<Patient> getAllPatients() {
        return this.patientService.getAllPatients();
    }

    @GetMapping("get/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return this.patientService.getPatientById(id);
    }

    @PostMapping("add")
    public Patient newPatient(@RequestBody Patient patient, @RequestParam("dossier") Long idDossier) {
        return this.patientService.newPatient(patient, idDossier);
    }

    @PutMapping("update/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient patient) {
        return this.patientService.updatePatient(patient, id);
    }

    @DeleteMapping("delete/{id}") 
    public void deletePatientById(@PathVariable("id") Long id) {
        this.patientService.deletePatientById(id);
    }  
}
