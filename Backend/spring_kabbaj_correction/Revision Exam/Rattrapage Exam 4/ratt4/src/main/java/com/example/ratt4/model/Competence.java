package com.example.ratt4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Competence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String niveau;
    @ManyToOne
    private OffreEmploi offreEmploi;
    @ManyToOne
    private Candidat candidat;   


    public Competence() {
    }


    public Competence(String nom, String niveau, OffreEmploi offreEmploi, Candidat candidat) {
        this.nom = nom;
        this.niveau = niveau;
        this.offreEmploi = offreEmploi;
        this.candidat = candidat;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNiveau() {
        return this.niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public OffreEmploi getOffreEmploi() {
        return this.offreEmploi;
    }

    public void setOffreEmploi(OffreEmploi offreEmploi) {
        this.offreEmploi = offreEmploi;
    }

    public Candidat getCandidat() {
        return this.candidat;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }


    @Override
    public String toString() {
        return "Competence [id=" + id + ", nom=" + nom + ", niveau=" + niveau + ", offreEmploi=" + offreEmploi
                + ", candidat=" + candidat + "]";
    }

    
}
