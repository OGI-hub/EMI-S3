package emi.revision.scrutin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.scrutin.models.Personne;

public interface PersonneRepo extends JpaRepository<Personne, Long>{

}
