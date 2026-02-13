package emi.revision.scrutin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.scrutin.models.Choix;

public interface ChoixRepo extends JpaRepository<Choix, Long>{

}
