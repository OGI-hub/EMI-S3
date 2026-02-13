package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Vol;

public interface VolRepository extends JpaRepository<Vol, Long> {

}
