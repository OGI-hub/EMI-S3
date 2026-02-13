package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Document;
import com.example.mediatheque.repo.DocumentRepo;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepo documentRepo;

    public List<Document> getAllDocuments() {
        return documentRepo.findAll();
    }

    public Document getDocumentById(Long id) {
        return documentRepo.findById(id).orElse(null);
    }

    public Document ajouterDocument(Document document) {
        return documentRepo.save(document);
    }

    public Document modifierDocument(Long id, Document document) throws NotFoundException {
        if (documentRepo.existsById(id)) {
            document.setId(id);
            return documentRepo.save(document);
        }
        throw new NotFoundException("Document not found");
    }

    public void supprimerDocument(Long id) throws NotFoundException {
        if (documentRepo.existsById(id)) {
            documentRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Document not found");
    }
}
