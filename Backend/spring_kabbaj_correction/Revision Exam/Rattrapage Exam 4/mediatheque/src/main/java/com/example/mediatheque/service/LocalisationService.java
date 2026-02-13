package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Localisation;
import com.example.mediatheque.repo.LocalisationRepo;

@Service
public class LocalisationService {
    @Autowired
    private LocalisationRepo localisationRepo;

    public List<Localisation> getAllLocalisations() {
        return localisationRepo.findAll();
    }

    public Localisation getLocalisationById(Long id) {
        return localisationRepo.findById(id).orElse(null);
    }

    public Localisation ajouterLocalisation(Localisation localisation) {
        return localisationRepo.save(localisation);
    }

    public Localisation modifierLocalisation(Long id, Localisation localisation) throws NotFoundException {
        if (localisationRepo.existsById(id)) {
            localisation.setId(id);
            return localisationRepo.save(localisation);
        }
        throw new NotFoundException("Localisation not found");
    }

    public void supprimerLocalisation(Long id) throws NotFoundException {
        if (localisationRepo.existsById(id)) {
            localisationRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Localisation not found");
    }
}
