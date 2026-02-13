package com.example.mediatheque.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.FicheEmprunt;

@Repository
public interface FicheEmpruntRepo extends JpaRepository<FicheEmprunt, Long> {
    List<FicheEmprunt> findByClientId(Long clientId);

    List<FicheEmprunt> findByDocumentId(Long documentId);
}
