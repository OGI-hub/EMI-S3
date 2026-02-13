package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Audio;

public interface AudioRepo extends JpaRepository<Audio, String>{

}
