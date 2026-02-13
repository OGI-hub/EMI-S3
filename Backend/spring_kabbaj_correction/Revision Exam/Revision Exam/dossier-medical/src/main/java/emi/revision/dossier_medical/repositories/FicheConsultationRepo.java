package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.FicheConsultation;

public interface FicheConsultationRepo extends JpaRepository<FicheConsultation, Long>{

}
