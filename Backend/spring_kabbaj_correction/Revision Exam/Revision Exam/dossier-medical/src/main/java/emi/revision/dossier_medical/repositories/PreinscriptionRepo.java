package emi.revision.dossier_medical.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.dossier_medical.model.Preinscription;

public interface PreinscriptionRepo extends JpaRepository<Preinscription, Long>{

}
