package emi.revision.mediatheque.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.mediatheque.model.Document;
import emi.revision.mediatheque.model.FicheEmprunt;
import emi.revision.mediatheque.repositories.DocumentRepo;
import emi.revision.mediatheque.repositories.FicheEmpruntRepo;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepo documentRepo;
    @Autowired
    private FicheEmpruntRepo ficheEmpruntRepo;

    public Document getDocumentById(String code) {
        return documentRepo.findById(code).orElse(null);
    }

    public Document addNewDocument(Document document) {
        if (this.documentRepo.findById(document.getCode()).isPresent()) {
            return null;
        }
        
        return this.documentRepo.save(document);
    }

    public Document deleteDocument(String code) {
        Document doc = this.getDocumentById(code);

        this.documentRepo.deleteById(code);

        return doc; // Returns null si on a pas trouvé le document en question
    }

    public Document updateDocument(String code, String title, String auteur) {
        Optional<Document> documentOptional = this.documentRepo.findById(code);

        if(documentOptional.isEmpty()) {
            return null;
        }

        Document doc = documentOptional.get();
        if (title != null) {
            doc.setTitre(title);
        }

        if (auteur != null) {
            doc.setAuteur(auteur);
        }

        return this.documentRepo.save(doc);
    }

    public List<FicheEmprunt> getFichesByDocuments(String code) {
        Optional<Document> documentOptional = this.documentRepo.findById(code);

        if(documentOptional.isEmpty()) {
            return null;
        }

        Document doc = documentOptional.get();

        return this.ficheEmpruntRepo.findByIdDocument(doc);

    }

}
