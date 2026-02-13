package ma.emi.aeroport.controller;

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

import ma.emi.aeroport.model.Compagnie;
import ma.emi.aeroport.repository.CompagnieRepository;

@RestController
@RequestMapping("/api/compagnies")
public class CompagnieController {

    @Autowired
    private CompagnieRepository compagnieRepository;

    @GetMapping
    public List<Compagnie> getAllCompagnies() {
        return compagnieRepository.findAll();
    }

    @GetMapping("/{id}")
    public Compagnie getCompagnieById(@PathVariable Long id) {
        return compagnieRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Compagnie createCompagnie(@RequestBody Compagnie compagnie) {
        return compagnieRepository.save(compagnie);
    }

    @PutMapping("/{id}")
    public Compagnie updateCompagnie(@PathVariable Long id, @RequestBody Compagnie compagnie) {
        Compagnie existing = compagnieRepository.findById(id).orElse(null);
        if (existing != null) {
            existing.setNom(compagnie.getNom());
            return compagnieRepository.save(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCompagnie(@PathVariable Long id) {
        compagnieRepository.deleteById(id);
    }
}
