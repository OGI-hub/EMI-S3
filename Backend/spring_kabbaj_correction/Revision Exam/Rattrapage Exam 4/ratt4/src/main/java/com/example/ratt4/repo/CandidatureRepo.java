package com.example.ratt4.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ratt4.model.Candidature;

public interface CandidatureRepo extends JpaRepository<Candidature, Long> {

    List<Candidature> findByCandidatId(Long candidatId);
    // Additional query methods can be defined here if needed

}
