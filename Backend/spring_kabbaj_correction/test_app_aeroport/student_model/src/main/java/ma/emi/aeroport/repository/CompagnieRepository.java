package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Compagnie;

public interface CompagnieRepository extends JpaRepository<Compagnie, Long> {
}
