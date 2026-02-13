package com.example.facteurs.Repo;

import com.example.facteurs.Entities.Colis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColisRepository extends JpaRepository<Colis, Long> {
}