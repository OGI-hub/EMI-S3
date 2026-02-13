package ma.ac.emi.ginfo.firstproject.services;

import ma.ac.emi.ginfo.firstproject.models.Livre;
import org.h2.mvstore.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LivreRepository extends JpaRepository<Livre, Integer> {
    List<Livre> findByTitreAndAuteurOrderByCote(String titre);

    @Query("select l.auteur from Livre l where l.enRayon = :enRay and l.titre = :titre")
    List<Livre> coucou(String titre, boolean enRay);
}
