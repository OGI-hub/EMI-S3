package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Localisation;

public interface LocalisationRepo extends JpaRepository<Localisation, Long> {

}
