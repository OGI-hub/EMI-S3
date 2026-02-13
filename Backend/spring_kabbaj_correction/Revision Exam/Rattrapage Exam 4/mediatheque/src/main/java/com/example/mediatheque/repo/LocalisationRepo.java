package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Localisation;

@Repository
public interface LocalisationRepo extends JpaRepository<Localisation, Long> {
}
