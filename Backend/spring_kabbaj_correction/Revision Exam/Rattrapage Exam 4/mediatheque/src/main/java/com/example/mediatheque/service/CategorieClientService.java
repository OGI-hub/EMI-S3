package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.CategorieClient;
import com.example.mediatheque.repo.CategorieClientRepo;

@Service
public class CategorieClientService {
    @Autowired
    private CategorieClientRepo categorieClientRepo;

    public List<CategorieClient> getAllCategorieClients() {
        return categorieClientRepo.findAll();
    }

    public CategorieClient getCategorieClientById(Long id) {
        return categorieClientRepo.findById(id).orElse(null);
    }

    public CategorieClient ajouterCategorieClient(CategorieClient categorieClient) {
        return categorieClientRepo.save(categorieClient);
    }

    public CategorieClient modifierCategorieClient(Long id, CategorieClient categorieClient) throws NotFoundException {
        if (categorieClientRepo.existsById(id)) {
            categorieClient.setId(id);
            return categorieClientRepo.save(categorieClient);
        }
        throw new NotFoundException("CategorieClient not found");
    }

    public void supprimerCategorieClient(Long id) throws NotFoundException {
        if (categorieClientRepo.existsById(id)) {
            categorieClientRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("CategorieClient not found");
    }
}
