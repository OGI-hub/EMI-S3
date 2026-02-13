package com.example.mediatheque.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToOne;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String auteur;
    private Integer annee;
    private Integer nombreExemplaire;
    private Integer seuilExemplaire;
    private Double prixLocation;
    @ManyToOne
    private Localisation localisation;
    @ManyToOne
    private Genre genre;

    public Document() {
    }

    public Document(String code, String auteur, Integer annee, Integer nombreExemplaire, Integer seuilExemplaire,
            Double prixLocation, Localisation localisation, Genre genre) {
        this.code = code;
        this.auteur = auteur;
        this.annee = annee;
        this.nombreExemplaire = nombreExemplaire;
        this.seuilExemplaire = seuilExemplaire;
        this.prixLocation = prixLocation;
        this.localisation = localisation;
        this.genre = genre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public Integer getAnnee() {
        return annee;
    }

    public void setAnnee(Integer annee) {
        this.annee = annee;
    }

    public Integer getNombreExemplaire() {
        return nombreExemplaire;
    }

    public void setNombreExemplaire(Integer nombreExemplaire) {
        this.nombreExemplaire = nombreExemplaire;
    }

    public Integer getSeuilExemplaire() {
        return seuilExemplaire;
    }

    public void setSeuilExemplaire(Integer seuilExemplaire) {
        this.seuilExemplaire = seuilExemplaire;
    }

    public Double getPrixLocation() {
        return prixLocation;
    }

    public void setPrixLocation(Double prixLocation) {
        this.prixLocation = prixLocation;
    }

    public Localisation getLocalisation() {
        return localisation;
    }

    public void setLocalisation(Localisation localisation) {
        this.localisation = localisation;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    @Override
    public String toString() {
        return "Document [id=" + id + ", code=" + code + ", auteur=" + auteur + ", annee=" + annee
                + ", nombreExemplaire=" + nombreExemplaire + ", seuilExemplaire=" + seuilExemplaire + ", prixLocation="
                + prixLocation + "]";
    }
}
