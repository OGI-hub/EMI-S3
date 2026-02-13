package com.example.mediatheque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.CategorieClient;
import com.example.mediatheque.service.CategorieClientService;

@RestController
@RequestMapping("/api/categories")
public class CategorieClientController {
    @Autowired
    private CategorieClientService categorieClientService;

    @GetMapping
    public List<CategorieClient> getAllCategorieClients() {
        return categorieClientService.getAllCategorieClients();
    }

    @GetMapping("/{id}")
    public CategorieClient getCategorieClientById(@PathVariable Long id) {
        return categorieClientService.getCategorieClientById(id);
    }

    @PostMapping("/ajouter")
    public CategorieClient ajouterCategorieClient(@RequestBody CategorieClient categorieClient) {
        return categorieClientService.ajouterCategorieClient(categorieClient);
    }

    @PutMapping("/update/{id}")
    public CategorieClient modifierCategorieClient(@PathVariable Long id, @RequestBody CategorieClient categorieClient)
            throws NotFoundException {
        return categorieClientService.modifierCategorieClient(id, categorieClient);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerCategorieClient(@PathVariable Long id) throws NotFoundException {
        categorieClientService.supprimerCategorieClient(id);
    }
}
