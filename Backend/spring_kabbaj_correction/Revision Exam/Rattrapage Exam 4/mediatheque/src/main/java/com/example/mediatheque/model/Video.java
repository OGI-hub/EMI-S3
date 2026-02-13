package com.example.mediatheque.model;

import jakarta.persistence.Entity;

@Entity
public class Video extends Document {
    private Integer dureeFilm;
    private String realisateur;
    private Integer duree;
    private Double tarif = 1.5;

    public Video() {
    }

    public Video(String code, String auteur, Integer annee, Integer nombreExemplaire, Integer seuilExemplaire,
            Double prixLocation, Localisation localisation, Genre genre, Integer dureeFilm, String realisateur,
            Integer duree) {
        super(code, auteur, annee, nombreExemplaire, seuilExemplaire, prixLocation, localisation, genre);
        this.dureeFilm = dureeFilm;
        this.realisateur = realisateur;
        this.duree = duree;
    }

    public Integer getDureeFilm() {
        return dureeFilm;
    }

    public void setDureeFilm(Integer dureeFilm) {
        this.dureeFilm = dureeFilm;
    }

    public String getRealisateur() {
        return realisateur;
    }

    public void setRealisateur(String realisateur) {
        this.realisateur = realisateur;
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
        return "Video [dureeFilm=" + dureeFilm + ", realisateur=" + realisateur + ", duree=" + duree + ", tarif="
                + tarif + "]";
    }
}
