package ma.emi.ginf.gestion_notes.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.emi.ginf.gestion_notes.models.Personne;
import java.util.List;


public interface PersonneRepository extends JpaRepository<Personne, Long>{
    List<Personne> findByNom(String nom);
}
