package emi.revision.aeroport.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.aeroport.models.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

}
