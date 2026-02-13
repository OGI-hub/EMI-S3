package emi.revision.dossier_medical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.dossier_medical.model.DossierMedical;
import emi.revision.dossier_medical.model.FicheDeSoin;
import emi.revision.dossier_medical.repositories.DossierMedicalRepo;

@Service
public class DossierMedicalService {

    @Autowired
    private DossierMedicalRepo dossierMedicalRepo;
    @Autowired 
    private FicheDeSoinService ficheDeSoinService;

    public DossierMedical getDossierById(Long id) {
        return this.dossierMedicalRepo.findById(id).orElse(null);
    }

    public DossierMedical newDossierMedical(DossierMedical dossier, List<Long> numeroFiches) {
        List<FicheDeSoin> fiches = numeroFiches.stream().map(id -> ficheDeSoinService.getFicheDeSoinById(id)).toList();
        
        dossier.setFiches(fiches);

        return this.dossierMedicalRepo.save(dossier);
    }
    
    public DossierMedical updateDossierMedical(DossierMedical dossier, Long id) {
        DossierMedical d = this.dossierMedicalRepo.findById(id).orElse(null);
        if(d == null) 
            return this.dossierMedicalRepo.save(dossier);

        d.setCodeAccesPatient(dossier.getCodeAccesPatient());
        d.setDateCreation(dossier.getDateCreation());
        d.setFiches(dossier.getFiches());
        
        return this.dossierMedicalRepo.save(d);
    }

    public void deleteDossierMedicalById(Long id) {
        this.dossierMedicalRepo.deleteById(id);
    }
}