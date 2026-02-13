package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
