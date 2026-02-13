package emi.revision.dossier_medical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.dossier_medical.model.DossierMedical;
import emi.revision.dossier_medical.model.Patient;
import emi.revision.dossier_medical.repositories.PatientRepo;

@Service
public class PatientService {
    @Autowired
    private PatientRepo patientRepo;
    @Autowired
    private DossierMedicalService dossierMedicalService;

    public List<Patient> getAllPatients() {
        return this.patientRepo.findAll();
    }

    public Patient getPatientById(Long id) {
        return this.patientRepo.findById(id).orElse(null);
    }

    public Patient newPatient(Patient patient, Long numeroDossier) {
        if (patient == null) {
            return null;
        }
        DossierMedical dossier = this.dossierMedicalService.getDossierById(numeroDossier);
        if(dossier == null) {
            return null;
        }
        patient.setDossier(dossier);
        return this.patientRepo.save(patient);

    }

    public Patient updatePatient(Patient patient, Long id) {
        Patient p = this.patientRepo.findById(id).orElse(null);
        if(p == null) 
            return this.patientRepo.save(patient);

        
        p.setNSS(patient.getNSS());
        p.setPrenom(patient.getPrenom());
        p.setNom(patient.getNom());
        p.setDateDeNaissance(patient.getDateDeNaissance());
        p.setSexe(patient.getSexe());
        p.setAddresse(patient.getAddresse());
        p.setNumeroTelephone(patient.getNumeroTelephone());
        p.setDossier(patient.getDossier());
        return this.patientRepo.save(p);

    }

    public void deletePatientById(Long id) {
        this.patientRepo.deleteById(id);
    }
}
