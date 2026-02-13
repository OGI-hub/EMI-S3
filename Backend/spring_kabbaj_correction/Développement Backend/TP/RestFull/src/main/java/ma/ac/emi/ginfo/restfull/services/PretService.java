package ma.ac.emi.ginfo.restfull.services;

import ma.ac.emi.ginfo.restfull.entities.Adhrent;
import ma.ac.emi.ginfo.restfull.entities.Livre;
import ma.ac.emi.ginfo.restfull.entities.Pret;
import ma.ac.emi.ginfo.restfull.repositories.AdhrentRepository;
import ma.ac.emi.ginfo.restfull.repositories.LivreRepository;
import ma.ac.emi.ginfo.restfull.repositories.PretRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class PretService {

    LivreRepository lr;
    AdhrentRepository ar;
    PretRepository pr;

    public PretService(LivreRepository lr, AdhrentRepository ar, PretRepository pr) {
        this.lr = lr;
        this.ar = ar;
        this.pr = pr;
    }
    public Optional<Livre> chercherLivre(String cote){
        if(lr.findById(cote).isPresent())
            return lr.findById(cote);
        else
            return lr.findByIsbn(cote);
    }
    public List<Livre> chercherLivreTitre(String cote){
        return lr.findByTitre(cote);
    }

    public Optional<Adhrent> chercherAdhrent(Long matricule){
        return ar.findById(matricule);
    }

    public List<Adhrent> chercherNom(String nom){
        return ar.findByNom(nom);
    }

    public Optional<Adhrent> chercherNom(String nom, int indice){
        List<Adhrent> adhrents = chercherNom(nom);
        if(indice < adhrents.size() && indice>0)
            return Optional.of(adhrents.get(indice));
        return null;
    }

    public void creerPret(Livre l, Adhrent a){
        pr.save(new Pret(l,a, LocalDate.now()));
    }

    public void retournerLivre(String cote){
        Livre l = lr.findById(cote).get();
        Pret p = l.getPret();
        Adhrent a = p.getAdhrent();
        l.setPret(null);
        a.remove(p);
        p.setDateRetour(LocalDate.now());
    }

    public List<Livre> livres(){
        return lr.findAll();
    }
}
