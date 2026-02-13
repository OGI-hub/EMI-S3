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
import com.example.mediatheque.model.Localisation;
import com.example.mediatheque.service.LocalisationService;

@RestController
@RequestMapping("/api/localisations")
public class LocalisationController {
    @Autowired
    private LocalisationService localisationService;

    @GetMapping
    public List<Localisation> getAllLocalisations() {
        return localisationService.getAllLocalisations();
    }

    @GetMapping("/{id}")
    public Localisation getLocalisationById(@PathVariable Long id) {
        return localisationService.getLocalisationById(id);
    }

    @PostMapping("/ajouter")
    public Localisation ajouterLocalisation(@RequestBody Localisation localisation) {
        return localisationService.ajouterLocalisation(localisation);
    }

    @PutMapping("/update/{id}")
    public Localisation modifierLocalisation(@PathVariable Long id, @RequestBody Localisation localisation)
            throws NotFoundException {
        return localisationService.modifierLocalisation(id, localisation);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerLocalisation(@PathVariable Long id) throws NotFoundException {
        localisationService.supprimerLocalisation(id);
    }
}
