package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

}
