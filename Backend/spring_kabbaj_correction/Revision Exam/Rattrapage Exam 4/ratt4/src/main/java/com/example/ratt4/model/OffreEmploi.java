package com.example.ratt4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class OffreEmploi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String description;
    private Double salaire;
    @OneToOne
    private Candidature candidature;
    @ManyToOne
    private Entreprise entreprise;


    public OffreEmploi() {
    }


    public OffreEmploi(String titre, String description, Double salaire, Candidature candidature,
            Entreprise entreprise) {
        this.titre = titre;
        this.description = description;
        this.salaire = salaire;
        this.candidature = candidature;
        this.entreprise = entreprise;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return this.titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getSalaire() {
        return this.salaire;
    }

    public void setSalaire(Double salaire) {
        this.salaire = salaire;
    }

    public Candidature getCandidature() {
        return this.candidature;
    }

    public void setCandidature(Candidature candidature) {
        this.candidature = candidature;
    }

    public Entreprise getEntreprise() {
        return this.entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }


    @Override
    public String toString() {
        return "OffreEmploi [id=" + id + ", titre=" + titre + ", description=" + description + ", salaire=" + salaire
                + ", candidature=" + candidature + ", entreprise=" + entreprise + "]";
    }
    
}   
