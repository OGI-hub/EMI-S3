package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Entreprise;
import com.example.ratt4.repo.EntrepriseRepo;

@Service
public class EntrepriseService {
    @Autowired
    private EntrepriseRepo entrepriseRepo;

    public List<Entreprise> getAllEntreprises() {
        return entrepriseRepo.findAll();
    }

    public Entreprise getEntrepriseById(Long id) {
        return entrepriseRepo.findById(id).orElse(null);
    }

    public Entreprise ajouterEntreprise(Entreprise entreprise) {
        return entrepriseRepo.save(entreprise);
    }

    public Entreprise modifierEntreprise(Long id, Entreprise entreprise) throws NotFoundException {
        if (entrepriseRepo.existsById(id)) {
            entreprise.setId(id);
            return entrepriseRepo.save(entreprise);
        }
        throw new NotFoundException("Entreprise not found");
    }

    public void supprimerEntreprise(Long id) throws NotFoundException {
        if (entrepriseRepo.existsById(id)) {
            entrepriseRepo.deleteById(id);
        } else {
            throw new NotFoundException("Entreprise not found");
        }
    }
}
