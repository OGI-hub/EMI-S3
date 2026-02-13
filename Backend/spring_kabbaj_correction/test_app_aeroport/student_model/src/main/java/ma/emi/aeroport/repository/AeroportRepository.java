package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Aeroport;

public interface AeroportRepository extends JpaRepository<Aeroport, Long> {
}
