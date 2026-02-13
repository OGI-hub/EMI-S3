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
import com.example.mediatheque.model.FicheEmprunt;
import com.example.mediatheque.service.FicheEmpruntService;

@RestController
@RequestMapping("/api/emprunts")
public class FicheEmpruntController {
    @Autowired
    private FicheEmpruntService ficheEmpruntService;

    @GetMapping
    public List<FicheEmprunt> getAllFicheEmprunts() {
        return ficheEmpruntService.getAllFicheEmprunts();
    }

    @GetMapping("/{id}")
    public FicheEmprunt getFicheEmpruntById(@PathVariable Long id) {
        return ficheEmpruntService.getFicheEmpruntById(id);
    }

    @PostMapping("/ajouter")
    public FicheEmprunt ajouterFicheEmprunt(@RequestBody FicheEmprunt ficheEmprunt) {
        return ficheEmpruntService.ajouterFicheEmprunt(ficheEmprunt);
    }

    @PutMapping("/update/{id}")
    public FicheEmprunt modifierFicheEmprunt(@PathVariable Long id, @RequestBody FicheEmprunt ficheEmprunt)
            throws NotFoundException {
        return ficheEmpruntService.modifierFicheEmprunt(id, ficheEmprunt);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerFicheEmprunt(@PathVariable Long id) throws NotFoundException {
        ficheEmpruntService.supprimerFicheEmprunt(id);
    }

    @GetMapping("/client/{clientId}")
    public List<FicheEmprunt> getFicheEmpruntsByClientId(@PathVariable Long clientId) {
        return ficheEmpruntService.getFicheEmpruntsByClientId(clientId);
    }

    @GetMapping("/document/{documentId}")
    public List<FicheEmprunt> getFicheEmpruntsByDocumentId(@PathVariable Long documentId) {
        return ficheEmpruntService.getFicheEmpruntsByDocumentId(documentId);
    }
}
