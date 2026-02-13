package com.example.mediatheque.model;

import jakarta.persistence.Entity;

@Entity
public class Livre extends Document {
    private Integer nombrePage;
    private Integer duree;
    private Double tarif = 0.5;

    public Livre() {
    }

    public Livre(String code, String auteur, Integer annee, Integer nombreExemplaire, Integer seuilExemplaire,
            Double prixLocation, Localisation localisation, Genre genre, Integer nombrePage, Integer duree) {
        super(code, auteur, annee, nombreExemplaire, seuilExemplaire, prixLocation, localisation, genre);
        this.nombrePage = nombrePage;
        this.duree = duree;
    }

    public Integer getNombrePage() {
        return nombrePage;
    }

    public void setNombrePage(Integer nombrePage) {
        this.nombrePage = nombrePage;
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
        return "Livre [nombrePage=" + nombrePage + ", duree=" + duree + ", tarif=" + tarif + "]";
    }
}
