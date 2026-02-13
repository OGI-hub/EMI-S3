package emi.revision.scrutin.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Scrutin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String intituleScrutin;
    private String texteCommentaireScrutin;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private LocalDate dateLimiteExistence;
    private Boolean ouvertureAvancee;
    private Boolean fermetureAvancee;
    private Boolean destructionAvancee;
    private static Integer nbtotalScrutins = 0;
    @ManyToOne
    private Personne personne;
    @OneToMany(mappedBy = "scrutin")
    @JsonIgnore
    private List<Bulletin> bulletins = new ArrayList<>();


    public Scrutin() {
        nbtotalScrutins += 1;
    }


    public Scrutin(String intituleScrutin, String texteCommentaireScrutin, LocalDate dateDebut, LocalDate dateFin,
            LocalDate dateLimiteExistence, Boolean ouvertureAvancee, Boolean fermetureAvancee,
            Boolean destructionAvancee, Personne personne) {
        this.intituleScrutin = intituleScrutin;
        this.texteCommentaireScrutin = texteCommentaireScrutin;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.dateLimiteExistence = dateLimiteExistence;
        this.ouvertureAvancee = ouvertureAvancee;
        this.fermetureAvancee = fermetureAvancee;
        this.destructionAvancee = destructionAvancee;
        this.personne = personne;
        nbtotalScrutins += 1;
    }


    public boolean add(Bulletin arg0) {
        return bulletins.add(arg0);
    }


    public boolean contains(Object arg0) {
        return bulletins.contains(arg0);
    }


    public Bulletin getBulletin(int arg0) {
        return bulletins.get(arg0);
    }


    public boolean remove(Object arg0) {
        return bulletins.remove(arg0);
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntituleScrutin() {
        return this.intituleScrutin;
    }

    public void setIntituleScrutin(String intituleScrutin) {
        this.intituleScrutin = intituleScrutin;
    }

    public String getTexteCommentaireScrutin() {
        return this.texteCommentaireScrutin;
    }

    public void setTexteCommentaireScrutin(String texteCommentaireScrutin) {
        this.texteCommentaireScrutin = texteCommentaireScrutin;
    }

    public LocalDate getDateDebut() {
        return this.dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return this.dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public LocalDate getDateLimiteExistence() {
        return this.dateLimiteExistence;
    }

    public void setDateLimiteExistence(LocalDate dateLimiteExistence) {
        this.dateLimiteExistence = dateLimiteExistence;
    }

    public Boolean isOuvertureAvancee() {
        return this.ouvertureAvancee;
    }

    public Boolean getOuvertureAvancee() {
        return this.ouvertureAvancee;
    }

    public void setOuvertureAvancee(Boolean ouvertureAvancee) {
        this.ouvertureAvancee = ouvertureAvancee;
    }

    public Boolean isFermetureAvancee() {
        return this.fermetureAvancee;
    }

    public Boolean getFermetureAvancee() {
        return this.fermetureAvancee;
    }

    public void setFermetureAvancee(Boolean fermetureAvancee) {
        this.fermetureAvancee = fermetureAvancee;
    }

    public Boolean isDestructionAvancee() {
        return this.destructionAvancee;
    }

    public Boolean getDestructionAvancee() {
        return this.destructionAvancee;
    }

    public void setDestructionAvancee(Boolean destructionAvancee) {
        this.destructionAvancee = destructionAvancee;
    }

    public Personne getPersonne() {
        return this.personne;
    }

    public void setPersonne(Personne personne) {
        this.personne = personne;
    }

    public List<Bulletin> getBulletins() {
        return this.bulletins;
    }

    public void setBulletins(List<Bulletin> bulletins) {
        this.bulletins = bulletins;
    }


    @Override
    public String toString() {
        return "Scrutin [id=" + id + ", intituleScrutin=" + intituleScrutin + ", texteCommentaireScrutin="
                + texteCommentaireScrutin + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin
                + ", dateLimiteExistence=" + dateLimiteExistence + ", ouvertureAvancee=" + ouvertureAvancee
                + ", fermetureAvancee=" + fermetureAvancee + ", destructionAvancee=" + destructionAvancee
                + ", personne=" + personne + "]";
    }
    

}
