package com.example.ratt4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Candidat;
import com.example.ratt4.service.CandidatService;

@RestController
@RequestMapping("/api/candidats")
public class CandidatController {
    @Autowired
    private CandidatService candidatService;
    
        @GetMapping
        public List<Candidat> getAllCandidats() {
            return candidatService.getAllCandidats();
        }

    @GetMapping("/{id}")
    public Candidat getCandidatById(@PathVariable Long id) {
        return candidatService.getCandidatById(id);
    }

    @PostMapping("/ajouter")
    public Candidat ajouterCandidat(Candidat candidat) {
        return candidatService.ajouterCandidat(candidat);
    }

    @PutMapping("/update/{id}")
    public Candidat modifierCandidat(@PathVariable Long id, Candidat candidat) throws NotFoundException {
        return candidatService.modifierCandidat(id, candidat);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerCandidat(@PathVariable Long id) throws NotFoundException {
        candidatService.supprimerCandidat(id);
    }
}
