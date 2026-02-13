package com.example.mediatheque.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CategorieClient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomCat;
    private Integer cotEmpruntsMax;
    private Double cotisation;
    private Double coefDuree;
    private Double coefTarif;
    private Boolean codeReducActif;

    public CategorieClient() {
    }

    public CategorieClient(String nomCat, Integer cotEmpruntsMax, Double cotisation, Double coefDuree, Double coefTarif,
            Boolean codeReducActif) {
        this.nomCat = nomCat;
        this.cotEmpruntsMax = cotEmpruntsMax;
        this.cotisation = cotisation;
        this.coefDuree = coefDuree;
        this.coefTarif = coefTarif;
        this.codeReducActif = codeReducActif;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomCat() {
        return nomCat;
    }

    public void setNomCat(String nomCat) {
        this.nomCat = nomCat;
    }

    public Integer getCotEmpruntsMax() {
        return cotEmpruntsMax;
    }

    public void setCotEmpruntsMax(Integer cotEmpruntsMax) {
        this.cotEmpruntsMax = cotEmpruntsMax;
    }

    public Double getCotisation() {
        return cotisation;
    }

    public void setCotisation(Double cotisation) {
        this.cotisation = cotisation;
    }

    public Double getCoefDuree() {
        return coefDuree;
    }

    public void setCoefDuree(Double coefDuree) {
        this.coefDuree = coefDuree;
    }

    public Double getCoefTarif() {
        return coefTarif;
    }

    public void setCoefTarif(Double coefTarif) {
        this.coefTarif = coefTarif;
    }

    public Boolean getCodeReducActif() {
        return codeReducActif;
    }

    public void setCodeReducActif(Boolean codeReducActif) {
        this.codeReducActif = codeReducActif;
    }

    @Override
    public String toString() {
        return "CategorieClient [id=" + id + ", nomCat=" + nomCat + ", cotEmpruntsMax=" + cotEmpruntsMax
                + ", cotisation=" + cotisation + ", coefDuree=" + coefDuree + ", coefTarif=" + coefTarif
                + ", codeReducActif=" + codeReducActif + "]";
    }
}
