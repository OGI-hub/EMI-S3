package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Candidature;
import com.example.ratt4.repo.CandidatureRepo;

@Service
public class CandidatureService {
    @Autowired
    private CandidatureRepo candidatureRepo;

    public List<Candidature> getAllCandidatures() {
        return candidatureRepo.findAll();
    }

    public Candidature getCandidatureById(Long id) {
        return candidatureRepo.findById(id).orElse(null);
    }

    public Candidature ajouterCandidature(Candidature candidature) {
        return candidatureRepo.save(candidature);
    }

    public Candidature modifierCandidature(Long id, Candidature candidature)  throws NotFoundException {
        if (candidatureRepo.existsById(id)) {
            candidature.setId(id);
            return candidatureRepo.save(candidature);
        }
        throw new NotFoundException("Candidature not found");
    }

    public void supprimerCandidature(Long id) throws NotFoundException {
        if (candidatureRepo.existsById(id)) {
            candidatureRepo.deleteById(id);
        } else {
            throw new NotFoundException("Candidature not found");
        }
    }

    public List<Candidature> getCandidaturesByCandidatId(Long candidatId) {
        return candidatureRepo.findByCandidatId(candidatId);
    }
}
