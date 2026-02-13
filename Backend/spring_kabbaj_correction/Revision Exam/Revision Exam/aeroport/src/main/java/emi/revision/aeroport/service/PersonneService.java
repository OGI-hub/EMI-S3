package emi.revision.aeroport.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.aeroport.models.Client;
import emi.revision.aeroport.models.Personne;
import emi.revision.aeroport.models.Passager;
import emi.revision.aeroport.repo.ClientRepo;
import emi.revision.aeroport.repo.PassagerRepo;
import emi.revision.aeroport.repo.PersonneRepo;

@Service
public class PersonneService {
    @Autowired
    private PersonneRepo personneRepo;
    @Autowired
    private ClientRepo clientRepo;
    @Autowired
    private PassagerRepo passagerRepo;

    public List<Personne> getAllPersonnes() {
        return personneRepo.findAll();
    }

    public Personne getPersonneById(Long id) {
        return personneRepo.findById(id).orElse(null);
    }

    public Personne addPersonne(Personne Personne) {
        if (Personne != null) {
            return personneRepo.save(Personne);
        }
        return null;
    }

    public Personne updatePersonne(Personne Personne) {
        if (Personne != null) {
            return personneRepo.save(Personne);
        }
        return null;
    }

    public Personne updatePersonneName(Long id, String name) {
        Personne c = this.personneRepo.findById(id).orElse(null);
        if (c == null)
            return null;

        if (name != null)
            c.setNom(name);
        return personneRepo.save(c);
    }

    public Personne deletePersonne(Long id) {
        Personne c = personneRepo.findById(id).orElse(null);
        if (c == null)
            return null;
        personneRepo.deleteById(id);
        return c;
    }

    public List<Client> getAllClients() {
        return clientRepo.findAll();
    }

    public Client getClientById(Long id) {
        return clientRepo.findById(id).orElse(null);
    }

    public Client addClient(Client Client) {
        if (Client.getNom() != null) {
            return clientRepo.save(Client);
        }
        return null;
    }

    public Client updateClient(Client client, Long id) {
        if (client == null || !this.personneRepo.findById(id).isPresent()) {
            return null;
        }

        client.setId(id);
        return personneRepo.save(client);
    }

    public Client updateClientName(Long id, String name) {
        Client c = this.clientRepo.findById(id).orElse(null);
        if (c == null)
            return null;

        if (name != null)
            c.setNom(name);
        return clientRepo.save(c);
    }

    public Client deleteClient(Long id) {
        Client c = clientRepo.findById(id).orElse(null);
        if (c == null)
            return null;
        clientRepo.deleteById(id);
        return c;
    }

    public List<Passager> getAllPassagers() {
        return passagerRepo.findAll();
    }

    public Passager getPassagerById(Long id) {
        return passagerRepo.findById(id).orElse(null);
    }

    public Passager addPassager(Passager Passager) {
        if (Passager != null) {
            return passagerRepo.save(Passager);
        }
        return null;
    }

    public Passager updatePassager(Long id, Passager passager) {
        if (passager == null || !this.personneRepo.findById(id).isPresent()) {
            return null;
        }

        passager.setId(id);
        return passagerRepo.save(passager);
    }

    public Passager updatePassagerName(Long id, String name) {
        Passager c = this.passagerRepo.findById(id).orElse(null);
        if (c == null)
            return null;

        if (name != null)
            c.setNom(name);
        return passagerRepo.save(c);
    }

    public Passager deletePassager(Long id) {
        Passager c = passagerRepo.findById(id).orElse(null);
        if (c == null)
            return null;
        passagerRepo.deleteById(id);
        return c;
    }
}
