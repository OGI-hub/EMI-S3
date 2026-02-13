package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.CategorieClient;

@Repository
public interface CategorieClientRepo extends JpaRepository<CategorieClient, Long> {
}
