package emi.revision.aeroport.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.aeroport.models.Passager;

public interface PassagerRepo extends JpaRepository<Passager, Long> {

}
