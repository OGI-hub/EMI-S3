package emi.revision.mediatheque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.mediatheque.model.Document;

public interface DocumentRepo extends JpaRepository<Document, String> {

}
