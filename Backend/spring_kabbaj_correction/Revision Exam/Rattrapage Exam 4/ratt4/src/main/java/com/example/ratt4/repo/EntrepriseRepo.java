package com.example.ratt4.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ratt4.model.Entreprise;

public interface EntrepriseRepo extends JpaRepository<Entreprise, Long> {
    // Additional query methods can be defined here if needed

}
