package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.Consultaion;

public interface ConsultationRepo extends JpaRepository<Consultaion, Long>{

}
