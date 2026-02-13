package ma.ac.emi.ginfo.restfull.repositories;

import ma.ac.emi.ginfo.restfull.entities.Adhrent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdhrentRepository extends JpaRepository<Adhrent, Long> {
    List<Adhrent> findByNom(String nom);
}