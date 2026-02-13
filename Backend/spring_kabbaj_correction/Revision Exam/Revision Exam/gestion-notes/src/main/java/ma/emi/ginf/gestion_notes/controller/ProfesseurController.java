package ma.emi.ginf.gestion_notes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.emi.ginf.gestion_notes.models.Professeur;
import ma.emi.ginf.gestion_notes.repo.ProfesseurRepository;


@RestController
@RequestMapping("api/v1")
public class ProfesseurController {
    @Autowired
    private ProfesseurRepository professeurRepository;
    
     @GetMapping("professeurs")
    public List<Professeur> getAllProfesseurs() {
        return professeurRepository.findAll();
    }

}
