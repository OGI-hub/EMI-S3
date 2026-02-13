package com.example.mediatheque.model;

import jakarta.persistence.Entity;

@Entity
public class Audio extends Document {
    private String classification;
    private Integer duree;
    private Double tarif = 1.5;

    public Audio() {
    }

    public Audio(String code, String auteur, Integer annee, Integer nombreExemplaire, Integer seuilExemplaire,
            Double prixLocation, Localisation localisation, Genre genre, String classification, Integer duree) {
        super(code, auteur, annee, nombreExemplaire, seuilExemplaire, prixLocation, localisation, genre);
        this.classification = classification;
        this.duree = duree;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public Double getTarif() {
        return tarif;
    }

    public void setTarif(Double tarif) {
        this.tarif = tarif;
    }

    @Override
    public String toString() {
        return "Audio [classification=" + classification + ", duree=" + duree + ", tarif=" + tarif + "]";
    }
}
