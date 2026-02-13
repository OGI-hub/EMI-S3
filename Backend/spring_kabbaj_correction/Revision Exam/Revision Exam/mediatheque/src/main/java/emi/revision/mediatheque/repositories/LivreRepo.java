package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Livre;

public interface LivreRepo extends JpaRepository<Livre, String>{

}
