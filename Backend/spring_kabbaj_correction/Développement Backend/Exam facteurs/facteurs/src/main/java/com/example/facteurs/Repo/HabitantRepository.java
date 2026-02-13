package com.example.facteurs.Repo;

import com.example.facteurs.Entities.Habitant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HabitantRepository extends JpaRepository<Habitant, Long> {
    Optional<List<Habitant>> findByNomAndEmail(String nom, String mail);
}