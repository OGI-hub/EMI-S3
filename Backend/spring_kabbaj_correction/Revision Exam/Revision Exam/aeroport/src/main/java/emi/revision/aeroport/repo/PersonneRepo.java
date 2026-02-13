package emi.revision.aeroport.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.aeroport.models.Personne;

public interface PersonneRepo extends JpaRepository<Personne, Long>{

}
