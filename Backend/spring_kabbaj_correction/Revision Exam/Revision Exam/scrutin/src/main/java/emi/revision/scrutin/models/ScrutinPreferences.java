package emi.revision.scrutin.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
public class ScrutinPreferences extends Scrutin{
    private static Integer nbTotal = 0;
    @OneToMany
    private List<Preference> preferences = new ArrayList<>();


    public ScrutinPreferences() {
        super();
        nbTotal++;
    }


    public ScrutinPreferences(String intituleScrutin, String texteCommentaireScrutin, LocalDate dateDebut,
            LocalDate dateFin, LocalDate dateLimiteExistence, Boolean ouvertureAvancee, Boolean fermetureAvancee,
            Boolean destructionAvancee, Personne personne) {
        super(intituleScrutin, texteCommentaireScrutin, dateDebut, dateFin, dateLimiteExistence, ouvertureAvancee,
                fermetureAvancee, destructionAvancee, personne);
                nbTotal++;
    }


    public List<Preference> getPreferences() {
        return this.preferences;
    }

    public void setPreferences(List<Preference> preferences) {
        this.preferences = preferences;
    }


    public boolean add(Preference arg0) {
        return preferences.add(arg0);
    }


    public boolean contains(Object arg0) {
        return preferences.contains(arg0);
    }


    public Preference getPreference(int arg0) {
        return preferences.get(arg0);
    }


    public boolean remove(Object arg0) {
        return preferences.remove(arg0);
    }


    public static Integer getNbTotal() {
        return nbTotal;
    }


    public static void setNbTotal(Integer nbTotal) {
        ScrutinPreferences.nbTotal = nbTotal;
    }


    @Override
    public String toString() {
        return "ScrutinPreferences [preferences=" + preferences + ", toString()=" + super.toString() + "]";
    }

    

    

    

}
