package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Livre;
import com.example.mediatheque.repo.LivreRepo;

@Service
public class LivreService {
    @Autowired
    private LivreRepo livreRepo;

    public List<Livre> getAllLivres() {
        return livreRepo.findAll();
    }

    public Livre getLivreById(Long id) {
        return livreRepo.findById(id).orElse(null);
    }

    public Livre ajouterLivre(Livre livre) {
        return livreRepo.save(livre);
    }

    public Livre modifierLivre(Long id, Livre livre) throws NotFoundException {
        if (livreRepo.existsById(id)) {
            livre.setId(id);
            return livreRepo.save(livre);
        }
        throw new NotFoundException("Livre not found");
    }

    public void supprimerLivre(Long id) throws NotFoundException {
        if (livreRepo.existsById(id)) {
            livreRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Livre not found");
    }
}
