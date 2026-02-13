package emi.revision.aeroport.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.aeroport.models.Aeroport;
import emi.revision.aeroport.models.Escale;
import emi.revision.aeroport.models.PK;
import emi.revision.aeroport.models.Vol;

public interface EscaleRepo extends JpaRepository<Escale, PK> {
    Optional<Escale> findByIdVolAndIdAeroport(Vol vol, Aeroport aeroport);
}
