package com.example.ratt4.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ratt4.model.Competence;

public interface CompetenceRepo extends JpaRepository<Competence, Long> {

    List<Competence> findByCandidatId(Long candidatId);
    // Additional query methods can be defined here if needed

}
