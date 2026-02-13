package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Genre;

public interface GenreRepo extends JpaRepository<Genre, Long> {

}
