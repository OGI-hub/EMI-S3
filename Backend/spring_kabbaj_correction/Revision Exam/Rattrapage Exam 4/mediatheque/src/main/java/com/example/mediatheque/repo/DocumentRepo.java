package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Document;

@Repository
public interface DocumentRepo extends JpaRepository<Document, Long> {
}
