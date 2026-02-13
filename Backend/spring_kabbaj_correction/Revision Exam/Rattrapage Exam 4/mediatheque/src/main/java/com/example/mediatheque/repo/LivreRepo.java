package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Livre;

@Repository
public interface LivreRepo extends JpaRepository<Livre, Long> {
}
