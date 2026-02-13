package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Audio;

@Repository
public interface AudioRepo extends JpaRepository<Audio, Long> {
}
