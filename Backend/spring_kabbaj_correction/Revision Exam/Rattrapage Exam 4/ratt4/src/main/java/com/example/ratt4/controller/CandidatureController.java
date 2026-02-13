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
import com.example.ratt4.model.Candidature;
import com.example.ratt4.service.CandidatureService;

@RestController
@RequestMapping("/api/candidatures")
public class CandidatureController {
    @Autowired
    private CandidatureService candidatureService;

    @GetMapping
    public List<Candidature> getAllCandidatures() {
        return candidatureService.getAllCandidatures();
    }

    @GetMapping("/{id}")
    public Candidature getCandidatureById(@PathVariable Long id) {
        return candidatureService.getCandidatureById(id);
    }

    @PostMapping("/ajouter")
    public Candidature ajouterCandidature(@RequestBody Candidature candidature) {
        return candidatureService.ajouterCandidature(candidature);
    }

    @PutMapping("/update/{id}")
    public Candidature modifierCandidature(@PathVariable Long id, @RequestBody Candidature candidature) throws NotFoundException {
        return candidatureService.modifierCandidature(id, candidature);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerCandidature(@PathVariable Long id) throws NotFoundException {
        candidatureService.supprimerCandidature(id);
    }

    @GetMapping("/candidat/{candidatId}")
    public List<Candidature> getCandidaturesByCandidatId(@PathVariable Long candidatId) {
        return candidatureService.getCandidaturesByCandidatId(candidatId);
    }

    
}
