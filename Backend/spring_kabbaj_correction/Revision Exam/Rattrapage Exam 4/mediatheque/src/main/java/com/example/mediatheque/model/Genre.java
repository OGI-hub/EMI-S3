package com.example.mediatheque.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private Integer nbEmpruntsAutorise;

    public Genre() {
    }

    public Genre(String nom, Integer nbEmpruntsAutorise) {
        this.nom = nom;
        this.nbEmpruntsAutorise = nbEmpruntsAutorise;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getNbEmpruntsAutorise() {
        return nbEmpruntsAutorise;
    }

    public void setNbEmpruntsAutorise(Integer nbEmpruntsAutorise) {
        this.nbEmpruntsAutorise = nbEmpruntsAutorise;
    }

    @Override
    public String toString() {
        return "Genre [id=" + id + ", nom=" + nom + ", nbEmpruntsAutorise=" + nbEmpruntsAutorise + "]";
    }
}
