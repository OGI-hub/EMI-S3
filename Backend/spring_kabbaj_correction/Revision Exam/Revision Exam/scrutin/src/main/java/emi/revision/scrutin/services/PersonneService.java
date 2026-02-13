package emi.revision.scrutin.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.scrutin.models.Bulletin;
import emi.revision.scrutin.models.Personne;
import emi.revision.scrutin.models.Scrutin;
import emi.revision.scrutin.repositories.BulletinRepo;
import emi.revision.scrutin.repositories.PersonneRepo;

@Service
public class PersonneService {
    @Autowired
    private PersonneRepo personneRepo;
    @Autowired
    private BulletinRepo bulletinRepo;

    public List<Personne> getAllPersonnes() {
        return this.personneRepo.findAll();
    } 

    public Personne getPersonneById(Long id) {
        return this.personneRepo.findById(id).orElse(null);
    }

    public Personne addNewPersonne(Personne personne) {
        if(personne.getNom() != null || personne.getPrenom() != null || personne.getNom().isEmpty() || personne.getPrenom().isEmpty()) {
            return null;
        }
        return this.personneRepo.save(personne);
    }

    public Personne deletePersonne(Long id) {
        Personne p = this.personneRepo.findById(id).orElse(null);
        this.personneRepo.deleteById(id);
        return p;
    }

    public Bulletin faireUnBulletin(Boolean value, Long idChoix, Long idScrutin, Long id) {
        Personne personne = this.personneRepo.findById(id).orElse(null);
        Choix choix = this.personneRepo.findById(id).orElse(null);
        Scrutin scrutin = this.personneRepo.findById(id).orElse(null);
        if(personne == null) {
            return null;
        }
        Bulletin b = new Bulletin(value, personne, null, null)
    }
}
