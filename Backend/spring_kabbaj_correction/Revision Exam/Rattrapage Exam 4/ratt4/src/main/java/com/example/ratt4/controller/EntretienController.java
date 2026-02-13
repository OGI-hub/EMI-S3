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
import com.example.ratt4.model.Entretien;
import com.example.ratt4.service.EntretienService;

@RestController
@RequestMapping("/api/entretiens")
public class EntretienController {
    @Autowired
    private EntretienService entretienService;

    @GetMapping
    public List<Entretien> getAllEntretiens() {
        return entretienService.getAllEntretiens();
    }

    @GetMapping("/{id}")
    public Entretien getEntretienById(@PathVariable Long id) {
        return entretienService.getEntretienById(id);
    }

    @PostMapping("/ajouter")
    public Entretien ajouterEntretien(@RequestBody Entretien entretien) {
        return entretienService.ajouterEntretien(entretien);
    }

    @PutMapping("/update/{id}")
    public Entretien modifierEntretien(@PathVariable Long id, @RequestBody Entretien entretien) throws NotFoundException {
        return entretienService.modifierEntretien(id, entretien);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerEntretien(@PathVariable Long id) throws NotFoundException {
        entretienService.supprimerEntretien(id);
    }

    @GetMapping("/candidature/{candidatureId}")
    public List<Entretien> getEntretiensByCandidatureId(@PathVariable Long candidatureId) {
        return entretienService.getEntretiensByCandidatureId(candidatureId);
    }

}
