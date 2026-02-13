package com.example.ratt4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Entreprise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String secteur;


    public Entreprise() {
    }


    public Entreprise(String nom, String secteur) {
        this.nom = nom;
        this.secteur = secteur;
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

    public String getSecteur() {
        return this.secteur;
    }

    public void setSecteur(String secteur) {
        this.secteur = secteur;
    }


    @Override
    public String toString() {
        return "Entreprise [id=" + id + ", nom=" + nom + ", secteur=" + secteur + "]";
    }

    

}
