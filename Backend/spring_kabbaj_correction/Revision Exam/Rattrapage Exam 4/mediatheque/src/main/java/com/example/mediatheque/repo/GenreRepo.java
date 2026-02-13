package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Genre;

@Repository
public interface GenreRepo extends JpaRepository<Genre, Long> {
}
