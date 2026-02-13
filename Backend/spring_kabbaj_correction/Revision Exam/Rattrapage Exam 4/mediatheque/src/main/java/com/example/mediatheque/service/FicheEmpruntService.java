package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.FicheEmprunt;
import com.example.mediatheque.repo.FicheEmpruntRepo;

@Service
public class FicheEmpruntService {
    @Autowired
    private FicheEmpruntRepo ficheEmpruntRepo;

    public List<FicheEmprunt> getAllFicheEmprunts() {
        return ficheEmpruntRepo.findAll();
    }

    public FicheEmprunt getFicheEmpruntById(Long id) {
        return ficheEmpruntRepo.findById(id).orElse(null);
    }

    public FicheEmprunt ajouterFicheEmprunt(FicheEmprunt ficheEmprunt) {
        return ficheEmpruntRepo.save(ficheEmprunt);
    }

    public FicheEmprunt modifierFicheEmprunt(Long id, FicheEmprunt ficheEmprunt) throws NotFoundException {
        if (ficheEmpruntRepo.existsById(id)) {
            ficheEmprunt.setId(id);
            return ficheEmpruntRepo.save(ficheEmprunt);
        }
        throw new NotFoundException("FicheEmprunt not found");
    }

    public void supprimerFicheEmprunt(Long id) throws NotFoundException {
        if (ficheEmpruntRepo.existsById(id)) {
            ficheEmpruntRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("FicheEmprunt not found");
    }

    public List<FicheEmprunt> getFicheEmpruntsByClientId(Long clientId) {
        return ficheEmpruntRepo.findByClientId(clientId);
    }

    public List<FicheEmprunt> getFicheEmpruntsByDocumentId(Long documentId) {
        return ficheEmpruntRepo.findByDocumentId(documentId);
    }
}
