package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Aeroport;
import ma.emi.aeroport.repository.AeroportRepository;

@RestController
@RequestMapping("/aeroports")
public class AeroportController {

    @Autowired
    private AeroportRepository aeroportRepository;

    @GetMapping
    public List<Aeroport> getAll() {
        return aeroportRepository.findAll();
    }

    @PostMapping
    public Aeroport save(@RequestBody Aeroport aeroport) {
        return aeroportRepository.save(aeroport);
    }
}
