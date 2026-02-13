package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Genre;
import com.example.mediatheque.repo.GenreRepo;

@Service
public class GenreService {
    @Autowired
    private GenreRepo genreRepo;

    public List<Genre> getAllGenres() {
        return genreRepo.findAll();
    }

    public Genre getGenreById(Long id) {
        return genreRepo.findById(id).orElse(null);
    }

    public Genre ajouterGenre(Genre genre) {
        return genreRepo.save(genre);
    }

    public Genre modifierGenre(Long id, Genre genre) throws NotFoundException {
        if (genreRepo.existsById(id)) {
            genre.setId(id);
            return genreRepo.save(genre);
        }
        throw new NotFoundException("Genre not found");
    }

    public void supprimerGenre(Long id) throws NotFoundException {
        if (genreRepo.existsById(id)) {
            genreRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Genre not found");
    }
}
