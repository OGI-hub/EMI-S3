package com.example.mediatheque.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Localisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String salle;
    private String rayon;

    public Localisation() {
    }

    public Localisation(String salle, String rayon) {
        this.salle = salle;
        this.rayon = rayon;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSalle() {
        return salle;
    }

    public void setSalle(String salle) {
        this.salle = salle;
    }

    public String getRayon() {
        return rayon;
    }

    public void setRayon(String rayon) {
        this.rayon = rayon;
    }

    @Override
    public String toString() {
        return "Localisation [id=" + id + ", salle=" + salle + ", rayon=" + rayon + "]";
    }
}
