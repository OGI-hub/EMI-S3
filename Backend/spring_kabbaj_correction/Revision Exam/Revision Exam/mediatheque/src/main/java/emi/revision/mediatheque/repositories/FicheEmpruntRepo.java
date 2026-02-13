package emi.revision.mediatheque.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Document;
import emi.revision.mediatheque.model.FicheEmprunt;
import emi.revision.mediatheque.model.PK;

public interface FicheEmpruntRepo extends JpaRepository<FicheEmprunt, PK> {

    List<FicheEmprunt> findByIdDocument(Document doc);

}
