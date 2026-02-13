package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.Patient;

public interface PatientRepo extends JpaRepository<Patient, Long>{

}
