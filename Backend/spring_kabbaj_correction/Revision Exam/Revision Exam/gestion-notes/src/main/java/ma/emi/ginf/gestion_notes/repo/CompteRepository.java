package ma.emi.ginf.gestion_notes.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.emi.ginf.gestion_notes.models.Compte;

public interface CompteRepository extends JpaRepository<Compte, Long>{

}
