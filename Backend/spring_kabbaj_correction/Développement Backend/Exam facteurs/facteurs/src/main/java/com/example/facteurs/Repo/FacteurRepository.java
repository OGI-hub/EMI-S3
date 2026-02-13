package com.example.facteurs.Repo;

import com.example.facteurs.Entities.Facteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacteurRepository extends JpaRepository<Facteur, Long> {
}