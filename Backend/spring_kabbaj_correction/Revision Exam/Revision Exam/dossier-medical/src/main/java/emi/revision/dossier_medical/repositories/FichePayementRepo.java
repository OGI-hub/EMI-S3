package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.FichePayement;

public interface FichePayementRepo extends JpaRepository<FichePayement, Long>{

}
