package ma.emi.aeroport.repository;

import ma.emi.aeroport.model.Aeroport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AeroportRepository extends JpaRepository<Aeroport, Long> {
}
