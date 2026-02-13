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
import com.example.ratt4.model.Competence;
import com.example.ratt4.service.CompetenceService;

@RestController
@RequestMapping("/api/competences")
public class CompetenceController {
    @Autowired
    private CompetenceService competenceService;

    @GetMapping
    public List<Competence> getAllCompetences() {
        return competenceService.getAllCompetences();
    }

    @GetMapping("/{id}")
    public Competence getCompetenceById(@PathVariable Long id) {
        return competenceService.getCompetenceById(id);
    }

    @PostMapping("/ajouter")
    public Competence ajouterCompetence(@RequestBody Competence competence) {
        return competenceService.ajouterCompetence(competence);
    }

    @PutMapping("/update/{id}")
    public Competence modifierCompetence(@PathVariable Long id, @RequestBody Competence competence) throws NotFoundException {
        return competenceService.modifierCompetence(id, competence);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerCompetence(@PathVariable Long id) throws NotFoundException {
        competenceService.supprimerCompetence(id);
    }

    @GetMapping("/candidat/{candidatId}")
    public List<Competence> getCompetencesByCandidatId(@PathVariable Long candidatId) {
        return competenceService.getCompetencesByCandidatId(candidatId);
    }

    

}
