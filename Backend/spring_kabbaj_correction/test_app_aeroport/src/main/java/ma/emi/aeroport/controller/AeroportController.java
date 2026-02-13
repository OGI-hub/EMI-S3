package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Aeroport;
import ma.emi.aeroport.repository.AeroportRepository;

@RestController
@RequestMapping("/api/aeroports")
public class AeroportController {

    @Autowired
    AeroportRepository aeroportRepository;

    @GetMapping
    public List<Aeroport> list() {
        return aeroportRepository.findAll();
    }

    @GetMapping("/{id}")
    public Aeroport get(@PathVariable Long id) {
        return aeroportRepository.findById(id).get();
    }

    @PostMapping
    public Aeroport create(@RequestBody Aeroport aeroport) {
        return aeroportRepository.save(aeroport);
    }

    @PutMapping("/{id}")
    public Aeroport update(@PathVariable Long id, @RequestBody Aeroport aeroport) {
        aeroport.setId(id);
        return aeroportRepository.save(aeroport);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        // supprimer l'aeroport
        aeroportRepository.deleteById(id);
    }
}
