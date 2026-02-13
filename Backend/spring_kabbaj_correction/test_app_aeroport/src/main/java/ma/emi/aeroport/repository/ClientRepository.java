package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ma.emi.aeroport.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}
