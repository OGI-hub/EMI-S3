package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Competence;
import com.example.ratt4.repo.CompetenceRepo;

@Service
public class CompetenceService {
    @Autowired
    private CompetenceRepo competenceRepo;

    public List<Competence> getAllCompetences() {
        return competenceRepo.findAll();
    }

    public Competence getCompetenceById(Long id) {
        return competenceRepo.findById(id).orElse(null);
    }

    public Competence ajouterCompetence(Competence competence) {
        return competenceRepo.save(competence);
    }

    public Competence modifierCompetence(Long id, Competence competence) throws NotFoundException {
        if (competenceRepo.existsById(id)) {
            competence.setId(id);
            return competenceRepo.save(competence);
        }
        throw new NotFoundException("Competence not found");
    }

    public void supprimerCompetence(Long id) throws NotFoundException {
        if (competenceRepo.existsById(id)) {
            competenceRepo.deleteById(id);
        } else {
            throw new NotFoundException("Competence not found");
        }
    }

    public List<Competence> getCompetencesByCandidatId(Long candidatId) {
        return competenceRepo.findByCandidatId(candidatId);
    }


}
