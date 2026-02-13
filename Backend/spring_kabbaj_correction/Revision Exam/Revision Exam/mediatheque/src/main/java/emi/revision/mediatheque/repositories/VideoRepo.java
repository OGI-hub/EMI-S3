package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Video;

public interface VideoRepo extends JpaRepository<Video, String>{

}
