package com.example.mediatheque.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Client;

@Repository
public interface ClientRepo extends JpaRepository<Client, Long> {
    List<Client> findByCategorieClientId(Long categorieClientId);
}
