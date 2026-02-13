package emi.revision.scrutin.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer nbParticipations;
    private Integer nbOrganisations;
    private String prenom;
    private String nom;
    private static Integer nbTotalParticipation = 0;
    private static Integer nbTotalOrganisation = 0;
    @OneToMany(mappedBy = "personne", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Scrutin> scrutins = new ArrayList<>();
    @OneToMany(mappedBy = "personne", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Bulletin> bulletins = new ArrayList<>();


    public Personne() {
    }

    public Personne(Integer nbParticipations, Integer nbOrganisations, String prenom, String nom) {
        this.nbParticipations = nbParticipations;
        this.nbOrganisations = nbOrganisations;
        this.prenom = prenom;
        this.nom = nom;
        nbTotalParticipation += nbParticipations;
        nbTotalOrganisation += nbOrganisations;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNbParticipations() {
        return this.nbParticipations;
    }

    public void setNbParticipations(Integer nbParticipations) {
        this.nbParticipations = nbParticipations;
    }

    public Integer getNbOrganisations() {
        return this.nbOrganisations;
    }

    public void setNbOrganisations(Integer nbOrganisations) {
        this.nbOrganisations = nbOrganisations;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Scrutin> getScrutins() {
        return this.scrutins;
    }

    public void setScrutins(List<Scrutin> scrutins) {
        this.scrutins = scrutins;
    }

    public List<Bulletin> getBulletins() {
        return this.bulletins;
    }

    public void setBulletins(List<Bulletin> bulletins) {
        this.bulletins = bulletins;
    }

    public boolean add(Bulletin arg0) {
        return bulletins.add(arg0);
    }

    public boolean contains(Object arg0) {
        return bulletins.contains(arg0);
    }

    public Bulletin get(int arg0) {
        return bulletins.get(arg0);
    }

    public boolean remove(Object arg0) {
        return bulletins.remove(arg0);
    }

    

    @Override
    public String toString() {
        return "Personne [id=" + id + ", nbParticipations=" + nbParticipations + ", nbOrganisations=" + nbOrganisations
                + ", prenom=" + prenom + ", nom=" + nom + "]";
    }

    

    
    

}
