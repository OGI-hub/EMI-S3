package ma.ac.emi.ginfo.restfull.repositories;

import ma.ac.emi.ginfo.restfull.entities.Livre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RepositoryRestController
public interface LivreRepository extends JpaRepository<Livre, String> {
    Optional<Livre> findByIsbn(String isbn);

    List<Livre> findByTitre(String titre);

}