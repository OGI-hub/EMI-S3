package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Candidat;
import com.example.ratt4.repo.CandidatRepo;

@Service
public class CandidatService {
    @Autowired
    private CandidatRepo candidatRepo;

    public List<Candidat> getAllCandidats() {
        return candidatRepo.findAll();
    }

    public Candidat getCandidatById(Long id) {
        return candidatRepo.findById(id).orElse(null);
    }

    public Candidat ajouterCandidat(Candidat candidat) {
        return candidatRepo.save(candidat);
    }

    public Candidat modifierCandidat(Long id, Candidat candidat) throws NotFoundException {
        if (candidatRepo.existsById(id)) {
            candidat.setId(id);
            return candidatRepo.save(candidat);
        }
        throw new NotFoundException("Candidat not found");
    }

    public void supprimerCandidat(Long id) throws NotFoundException {
        if (candidatRepo.existsById(id)) {
            candidatRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Candidat not found");
        

    }
}
