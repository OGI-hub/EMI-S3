package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Ville;

public interface VilleRepository extends JpaRepository<Ville, Long> {
}
