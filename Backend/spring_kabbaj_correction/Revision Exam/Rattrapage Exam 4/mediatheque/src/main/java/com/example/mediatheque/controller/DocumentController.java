package com.example.mediatheque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Document;
import com.example.mediatheque.service.DocumentService;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @GetMapping
    public List<Document> getAllDocuments() {
        return documentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public Document getDocumentById(@PathVariable Long id) {
        return documentService.getDocumentById(id);
    }

    @PostMapping("/ajouter")
    public Document ajouterDocument(@RequestBody Document document) {
        return documentService.ajouterDocument(document);
    }

    @PutMapping("/update/{id}")
    public Document modifierDocument(@PathVariable Long id, @RequestBody Document document) throws NotFoundException {
        return documentService.modifierDocument(id, document);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerDocument(@PathVariable Long id) throws NotFoundException {
        documentService.supprimerDocument(id);
    }
}
