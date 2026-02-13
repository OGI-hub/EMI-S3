package com.example.ratt4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ratt4.exceptions.NotFoundException;
import com.example.ratt4.model.Entretien;
import com.example.ratt4.repo.EntretienRepo;

@Service
public class EntretienService {
    @Autowired
    private EntretienRepo entretienRepo;

    public List<Entretien> getAllEntretiens() {
        return entretienRepo.findAll();
    }
    
    public Entretien getEntretienById(Long id) {
        return entretienRepo.findById(id).orElse(null);
    }

    public Entretien ajouterEntretien(Entretien entretien) {
        return entretienRepo.save(entretien);
    }

    public Entretien modifierEntretien(Long id, Entretien entretien) throws NotFoundException {
        if (entretienRepo.existsById(id)) {
            entretien.setId(id);
            return entretienRepo.save(entretien);
        }
        throw new NotFoundException("Entretien not found");
    }

    public void supprimerEntretien(Long id) throws NotFoundException {
        if (entretienRepo.existsById(id)) {
            entretienRepo.deleteById(id);
        } else {
            throw new NotFoundException("Entretien not found");
        }
    }

    public List<Entretien> getEntretiensByCandidatureId(Long candidatureId) {
        return entretienRepo.findByCandidatureId(candidatureId);
    }



}

    
