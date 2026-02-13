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
import com.example.mediatheque.model.Client;
import com.example.mediatheque.service.ClientService;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    @PostMapping("/ajouter")
    public Client ajouterClient(@RequestBody Client client) {
        return clientService.ajouterClient(client);
    }

    @PutMapping("/update/{id}")
    public Client modifierClient(@PathVariable Long id, @RequestBody Client client) throws NotFoundException {
        return clientService.modifierClient(id, client);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerClient(@PathVariable Long id) throws NotFoundException {
        clientService.supprimerClient(id);
    }

    @GetMapping("/categorie/{categorieClientId}")
    public List<Client> getClientsByCategorieClientId(@PathVariable Long categorieClientId) {
        return clientService.getClientsByCategorieClientId(categorieClientId);
    }
}
