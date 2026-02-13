package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Passager;

public interface PassagerRepository extends JpaRepository<Passager, Long> {
}
