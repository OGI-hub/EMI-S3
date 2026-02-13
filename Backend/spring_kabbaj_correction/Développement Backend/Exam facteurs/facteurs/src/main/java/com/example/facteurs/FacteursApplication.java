package com.example.facteurs;

import com.example.facteurs.Entities.Facteur;
import com.example.facteurs.Entities.Habitant;
import com.example.facteurs.Entities.Personne;
import com.example.facteurs.Repo.HabitantRepository;
import com.example.facteurs.Repo.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FacteursApplication implements CommandLineRunner {
    @Autowired
    private HabitantRepository habitantRepository;
    @Autowired
    private PersonneRepository personneRepository;

    public static void main(String[] args) {
        SpringApplication.run(FacteursApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Personne chaouki = new Facteur("chaouki","chorafae","etage2","tetouan");
        Habitant fajoui = new Habitant("ff","b","","","ss","");
        Habitant fajoui2 = new Habitant("ff","","","","ss","");
        habitantRepository.save(fajoui);
        habitantRepository.save(fajoui2);
        System.out.println(habitantRepository.findAll());
        System.out.println(habitantRepository.findByNomAndEmail("ff","ss"));
       // habitantRepository.deleteById(1L);


    }
}
