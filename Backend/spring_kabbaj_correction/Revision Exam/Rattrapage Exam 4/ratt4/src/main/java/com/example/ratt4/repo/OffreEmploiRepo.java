package com.example.ratt4.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ratt4.model.OffreEmploi;

public interface OffreEmploiRepo extends JpaRepository<OffreEmploi, Long> {

    List<OffreEmploi> findByEntrepriseId(Long entrepriseId);
    // Additional query methods can be defined here if needed

    List<OffreEmploi> findByCandidatId(Long candidatId);

}
