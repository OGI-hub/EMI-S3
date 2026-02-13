package emi.revision.scrutin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.scrutin.models.Scrutin;

public interface ScrutinRepo extends JpaRepository<Scrutin, Long>{

}
