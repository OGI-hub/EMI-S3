package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.OffreEmploi;
import com.example.ratt4.repo.OffreEmploiRepo;

@Service
public class OffreEmploiService {
    @Autowired
    private OffreEmploiRepo offreEmploiRepo;

    public List<OffreEmploi> getAllOffresEmploi() {
        return offreEmploiRepo.findAll();
    }

    public OffreEmploi getOffreEmploiById(Long id) {
        return offreEmploiRepo.findById(id).orElse(null);
    }

    public OffreEmploi ajouterOffreEmploi(OffreEmploi offreEmploi) {
        return offreEmploiRepo.save(offreEmploi);
    }

    public OffreEmploi modifierOffreEmploi(Long id, OffreEmploi offreEmploi) throws NotFoundException {
        if (offreEmploiRepo.existsById(id)) {
            offreEmploi.setId(id);
            return offreEmploiRepo.save(offreEmploi);
        }
        throw new NotFoundException("Offre d'emploi not found");
    }

    public void supprimerOffreEmploi(Long id) throws NotFoundException {
        if (offreEmploiRepo.existsById(id)) {
            offreEmploiRepo.deleteById(id);
        } else {
            throw new NotFoundException("Offre d'emploi not found");
        }
    }

    public List<OffreEmploi> getOffresEmploiByEntrepriseId(Long entrepriseId) {
        return offreEmploiRepo.findByEntrepriseId(entrepriseId);
    }

    public List<OffreEmploi> getOffresEmploiByCandidatId(Long candidatId) {
        return offreEmploiRepo.findByCandidatId(candidatId);
    }
}
