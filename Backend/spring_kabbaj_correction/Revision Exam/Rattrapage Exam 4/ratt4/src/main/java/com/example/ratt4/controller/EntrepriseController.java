package com.example.ratt4.controller;

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

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Entreprise;
import com.example.ratt4.service.EntrepriseService;

@RestController
@RequestMapping("/api/entreprises")
public class EntrepriseController {
    @Autowired
    private EntrepriseService entrepriseService;

    @GetMapping
    public List<Entreprise> getAllEntreprises() {
        return entrepriseService.getAllEntreprises();
    }

    @GetMapping("/{id}")
    public Entreprise getEntrepriseById(@PathVariable Long id) {
        return entrepriseService.getEntrepriseById(id);
    }

    @PostMapping("/ajouter")
    public Entreprise ajouterEntreprise(@RequestBody Entreprise entreprise) {
        return entrepriseService.ajouterEntreprise(entreprise);
    }

    @PutMapping("/update/{id}")
    public Entreprise modifierEntreprise(@PathVariable Long id, @RequestBody Entreprise entreprise) throws NotFoundException {
        return entrepriseService.modifierEntreprise(id, entreprise);
    }
    
    @DeleteMapping("/delete/{id}")
    public void supprimerEntreprise(@PathVariable Long id) throws NotFoundException {
        entrepriseService.supprimerEntreprise(id);
    }

}
