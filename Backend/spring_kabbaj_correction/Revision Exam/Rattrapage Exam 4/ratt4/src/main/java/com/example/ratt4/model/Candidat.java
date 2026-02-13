package com.example.ratt4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Candidat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String email;
    private String cv;


    public Candidat() {
    }


    public Candidat(String nom, String email, String cv) {
        this.nom = nom;
        this.email = email;
        this.cv = cv;
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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCv() {
        return cv;
    }
    public void setCv(String cv) {
        this.cv = cv;
    }
    @Override
    public String toString() {
        return "Candidat [id=" + id + ", nom=" + nom + ", email=" + email + ", cv=" + cv + "]";
    }

    

}
