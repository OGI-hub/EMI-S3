package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.DossierMedical;

public interface DossierMedicalRepo extends JpaRepository<DossierMedical, Long>{

}
