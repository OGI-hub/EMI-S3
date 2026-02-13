package com.example.ratt4.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ratt4.model.Entretien;

public interface EntretienRepo extends JpaRepository<Entretien, Long> {

    List<Entretien> findByCandidatureId(Long candidatureId);

}
