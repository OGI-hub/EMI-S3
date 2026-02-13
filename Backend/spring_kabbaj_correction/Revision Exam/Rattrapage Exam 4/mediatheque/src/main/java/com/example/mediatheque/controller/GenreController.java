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
import com.example.mediatheque.model.Genre;
import com.example.mediatheque.service.GenreService;

@RestController
@RequestMapping("/api/genres")
public class GenreController {
    @Autowired
    private GenreService genreService;

    @GetMapping
    public List<Genre> getAllGenres() {
        return genreService.getAllGenres();
    }

    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable Long id) {
        return genreService.getGenreById(id);
    }

    @PostMapping("/ajouter")
    public Genre ajouterGenre(@RequestBody Genre genre) {
        return genreService.ajouterGenre(genre);
    }

    @PutMapping("/update/{id}")
    public Genre modifierGenre(@PathVariable Long id, @RequestBody Genre genre) throws NotFoundException {
        return genreService.modifierGenre(id, genre);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerGenre(@PathVariable Long id) throws NotFoundException {
        genreService.supprimerGenre(id);
    }
}
