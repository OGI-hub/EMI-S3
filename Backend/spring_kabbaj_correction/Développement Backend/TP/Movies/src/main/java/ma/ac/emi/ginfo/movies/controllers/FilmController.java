package ma.ac.emi.ginfo.movies.controllers;

import ma.ac.emi.ginfo.movies.entities.Film;
import ma.ac.emi.ginfo.movies.repositories.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FilmController {
    @Autowired
    FilmRepository fr;

    @GetMapping("/fs")
    public List<Film> tousFilms() {
        return fr.findAll();
    }

    @GetMapping("/fs/{idf}")
    public Film monFilm(@PathVariable(name = "idf")Long id) {
        return fr.findById(id).get();
    }

    @PutMapping("/fs/{idf}")
    public Film updateFilm(@RequestBody Film newFilm, @PathVariable(name = "idf")Long id) {
        newFilm.setId(id);
        return fr.saveAndFlush(newFilm);
    }

    @DeleteMapping("/fs/{idf}")
    public void deleteFilm(@PathVariable(name = "idf")Long id){
        fr.deleteById(id);
    }

    @PostMapping("/fs/")
    public Film createFilm(@RequestBody Film newFilm){
        return fr.save(newFilm);
    }





}
