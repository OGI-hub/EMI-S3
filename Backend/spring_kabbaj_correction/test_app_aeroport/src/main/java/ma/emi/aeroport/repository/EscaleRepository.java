package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Escale;

public interface EscaleRepository extends JpaRepository<Escale, Long> {
}
