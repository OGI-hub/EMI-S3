package com.example.mediatheque.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mediatheque.model.Video;

@Repository
public interface VideoRepo extends JpaRepository<Video, Long> {
}
