package emi.revision.aeroport.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emi.revision.aeroport.models.Client;
import emi.revision.aeroport.service.PersonneService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private PersonneService personneService;

    @GetMapping("")
    public List<Client> getAllClients() {
        return this.personneService.getAllClients();
    }
    
    @GetMapping("/{id}")
    public Client getClientById(@PathVariable("id") Long id) {
        return this.personneService.getClientById(id);
    }

    @PostMapping("/add")
    public Client addNewClient(@RequestBody Client client) {
        return this.personneService.addClient(client);
    }

    @DeleteMapping("/delete/{id}")
    public Client deleteClient(@PathVariable("id") Long id) {
        return this.personneService.deleteClient(id);
    }

    @PutMapping("update/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client client) {
        return this.personneService.updateClient(client, id);
    }
    
    
    
    
}
