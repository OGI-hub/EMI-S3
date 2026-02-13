package com.example.facteurs.Repo;

import com.example.facteurs.Entities.Personne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonneRepository extends JpaRepository<Personne, Long> {
}