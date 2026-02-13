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
import com.example.ratt4.model.OffreEmploi;
import com.example.ratt4.service.OffreEmploiService;

@RestController
@RequestMapping("/api/offres-emploi")
public class OffreEmploiController {
    @Autowired
    private OffreEmploiService offreEmploiService;

    @GetMapping
    public List<OffreEmploi> getAllOffres() {
        return offreEmploiService.getAllOffresEmploi();
    }

    @GetMapping("/{id}")
    public OffreEmploi getOffreById(@PathVariable Long id) {
        return offreEmploiService.getOffreEmploiById(id);
    }

    @PostMapping("/ajouter")
    public OffreEmploi ajouterOffre(@RequestBody OffreEmploi offreEmploi) {
        return offreEmploiService.ajouterOffreEmploi(offreEmploi);
    }

    @PutMapping("/update/{id}")
    public OffreEmploi modifierOffre(@PathVariable Long id, @RequestBody OffreEmploi offreEmploi) throws NotFoundException {
        return offreEmploiService.modifierOffreEmploi(id, offreEmploi);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerOffre(@PathVariable Long id) throws NotFoundException {
        offreEmploiService.supprimerOffreEmploi(id);
    }

    @GetMapping("/entreprise/{entrepriseId}")
    public List<OffreEmploi> getOffresByEntrepriseId(@PathVariable Long entrepriseId) {
        return offreEmploiService.getOffresEmploiByEntrepriseId(entrepriseId);
    }

    @GetMapping("/candidat/{candidatId}")
    public List<OffreEmploi> getOffresByCandidatId(@PathVariable Long candidatId) {
        return offreEmploiService.getOffresEmploiByCandidatId(candidatId);
    }
    
}
