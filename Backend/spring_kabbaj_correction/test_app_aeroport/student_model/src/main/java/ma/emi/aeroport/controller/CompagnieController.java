package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Compagnie;
import ma.emi.aeroport.repository.CompagnieRepository;

@RestController
@RequestMapping("/compagnies")
public class CompagnieController {

    @Autowired
    CompagnieRepository compagnieRepository;

    @GetMapping
    public List<Compagnie> all() {
        return compagnieRepository.findAll();
    }

    @PostMapping
    public Compagnie add(@RequestBody Compagnie c) {
        return compagnieRepository.save(c);
    }
}
