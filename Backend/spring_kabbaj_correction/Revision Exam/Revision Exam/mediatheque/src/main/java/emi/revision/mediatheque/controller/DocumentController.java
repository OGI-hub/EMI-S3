package emi.revision.mediatheque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import emi.revision.mediatheque.model.Document;
import emi.revision.mediatheque.model.FicheEmprunt;
import emi.revision.mediatheque.model.Livre;
import emi.revision.mediatheque.service.DocumentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/document")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @GetMapping("/{id}")
    public Document getDocumentById(@PathVariable("id") String code) {
        return  documentService.getDocumentById(code);
    }

    @PostMapping("/add")
    public Document addNewLivre(@RequestBody Livre document) {      
        return documentService.addNewDocument(document);
    }

    @DeleteMapping("/delete/{id}")
    public Document deleteDocument(@PathVariable("id") String code) {
        return this.documentService.deleteDocument(code);
    }

    @PutMapping("update/{id}")
    public Document updatDocument(@PathVariable("id") String code, @RequestParam(required = false, name = "title") String title, @RequestParam(required = false, name = "auteur") String auteur) {
        return this.documentService.updateDocument(code, title, auteur);
    }

    @GetMapping("fiche/{id}")
    public List<FicheEmprunt> getFichesByDocuments(@PathVariable("id") String code) {
        return this.documentService.getFichesByDocuments(code);

    }
    

    
    



}
