package com.example.ratt4.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ratt4.model.Candidat;

@Repository
public interface CandidatRepo  extends JpaRepository<Candidat, Long> {
    // Additional query methods can be defined here if needed
}
