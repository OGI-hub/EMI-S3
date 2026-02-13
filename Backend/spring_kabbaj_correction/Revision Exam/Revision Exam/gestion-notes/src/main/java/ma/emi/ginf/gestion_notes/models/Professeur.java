package ma.emi.ginf.gestion_notes.models;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;

@Entity
public class Professeur extends Personne {
    @Enumerated(EnumType.STRING)
    private GradeType grade = GradeType.PA;
    @Column(nullable = false)
    private Integer numSomme;
    @ManyToMany(fetch=FetchType.EAGER, mappedBy = "professeurs")
    private Set<Matiere> matieres = new HashSet<>();
    

    public Professeur() {
    }

    public Professeur(Long id, String nom, String prenom, LocalDate dateDeNaissance, GradeType grade,
            Integer numSomme) {
        super(id, nom, prenom, dateDeNaissance);
        this.grade = grade;
        this.numSomme = numSomme;
    }




    public GradeType getGrade() {
        return this.grade;
    }

    public void setGrade(GradeType grade) {
        this.grade = grade;
    }

    public Integer getNumSomme() {
        return this.numSomme;
    }

    public void setNumSomme(Integer numSomme) {
        this.numSomme = numSomme;
    }

    @Override
    public String toString() {
        return "Professeur [grade=" + grade + ", numSomme=" + numSomme + ", toString()=" + super.toString() + "]";
    }


    

    

}
