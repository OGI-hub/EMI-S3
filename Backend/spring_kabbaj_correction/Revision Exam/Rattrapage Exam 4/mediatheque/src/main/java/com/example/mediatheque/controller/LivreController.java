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
import com.example.mediatheque.model.Livre;
import com.example.mediatheque.service.LivreService;

@RestController
@RequestMapping("/api/livres")
public class LivreController {
    @Autowired
    private LivreService livreService;

    @GetMapping
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @GetMapping("/{id}")
    public Livre getLivreById(@PathVariable Long id) {
        return livreService.getLivreById(id);
    }

    @PostMapping("/ajouter")
    public Livre ajouterLivre(@RequestBody Livre livre) {
        return livreService.ajouterLivre(livre);
    }

    @PutMapping("/update/{id}")
    public Livre modifierLivre(@PathVariable Long id, @RequestBody Livre livre) throws NotFoundException {
        return livreService.modifierLivre(id, livre);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerLivre(@PathVariable Long id) throws NotFoundException {
        livreService.supprimerLivre(id);
    }
}
