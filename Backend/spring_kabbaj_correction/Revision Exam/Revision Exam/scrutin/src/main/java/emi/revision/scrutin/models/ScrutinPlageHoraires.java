package emi.revision.scrutin.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
public class ScrutinPlageHoraires extends Scrutin{
    private static Integer nbTotal = 0;
    @OneToMany
    private List<PlageHoraire> plageHoraires = new ArrayList<>();


    public ScrutinPlageHoraires() {
        super();
        nbTotal++;
    }


    public ScrutinPlageHoraires(String intituleScrutin, String texteCommentaireScrutin, LocalDate dateDebut,
            LocalDate dateFin, LocalDate dateLimiteExistence, Boolean ouvertureAvancee, Boolean fermetureAvancee,
            Boolean destructionAvancee, Personne personne) {
        super(intituleScrutin, texteCommentaireScrutin, dateDebut, dateFin, dateLimiteExistence, ouvertureAvancee,
                fermetureAvancee, destructionAvancee, personne);
                nbTotal++;
    }


    public List<PlageHoraire> getPlageHoraires() {
        return this.plageHoraires;
    }

    public void setPlageHoraires(List<PlageHoraire> plageHoraires) {
        this.plageHoraires = plageHoraires;
    }
    


    public boolean add(PlageHoraire arg0) {
        return plageHoraires.add(arg0);
    }


    public boolean contains(Object arg0) {
        return plageHoraires.contains(arg0);
    }


    public PlageHoraire getPlageHoraire(int arg0) {
        return plageHoraires.get(arg0);
    }


    public boolean remove(Object arg0) {
        return plageHoraires.remove(arg0);
    }


    @Override
    public String toString() {
        return "ScrutinPlageHoraires [plageHoraires=" + plageHoraires + ", toString()=" + super.toString() + "]";
    }


}
