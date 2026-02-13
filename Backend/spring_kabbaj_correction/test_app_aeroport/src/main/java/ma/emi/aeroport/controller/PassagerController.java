package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Passager;
import ma.emi.aeroport.repository.PassagerRepository;

@RestController
@RequestMapping("/api/passagers")
public class PassagerController {

    @Autowired
    private PassagerRepository passagerRepo;

    @GetMapping
    public List<Passager> getAll() {
        return passagerRepo.findAll();
    }

    @GetMapping("/{id}")
    public Passager getOne(@PathVariable Long id) {
        // trouver un passager par id
        return passagerRepo.findById(id).orElse(null);
    }

    @PostMapping
    public Passager add(@RequestBody Passager passager) {
        return passagerRepo.save(passager);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id) {
        passagerRepo.deleteById(id);
    }

    // manque PUT mais pas le temps
}
