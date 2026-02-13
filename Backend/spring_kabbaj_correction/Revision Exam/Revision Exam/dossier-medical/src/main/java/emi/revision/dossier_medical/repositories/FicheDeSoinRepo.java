package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.FicheDeSoin;

public interface FicheDeSoinRepo extends JpaRepository<FicheDeSoin, Long>{

}
