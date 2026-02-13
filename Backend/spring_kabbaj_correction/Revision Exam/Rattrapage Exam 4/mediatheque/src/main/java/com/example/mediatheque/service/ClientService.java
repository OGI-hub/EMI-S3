package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Client;
import com.example.mediatheque.repo.ClientRepo;

@Service
public class ClientService {
    @Autowired
    private ClientRepo clientRepo;

    public List<Client> getAllClients() {
        return clientRepo.findAll();
    }

    public Client getClientById(Long id) {
        return clientRepo.findById(id).orElse(null);
    }

    public Client ajouterClient(Client client) {
        return clientRepo.save(client);
    }

    public Client modifierClient(Long id, Client client) throws NotFoundException {
        if (clientRepo.existsById(id)) {
            client.setId(id);
            return clientRepo.save(client);
        }
        throw new NotFoundException("Client not found");
    }

    public void supprimerClient(Long id) throws NotFoundException {
        if (clientRepo.existsById(id)) {
            clientRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Client not found");
    }

    public List<Client> getClientsByCategorieClientId(Long categorieClientId) {
        return clientRepo.findByCategorieClientId(categorieClientId);
    }
}
