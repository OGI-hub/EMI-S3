package com.example.mediatheque.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String adresse;
    private LocalDate dateNaissance;
    private LocalDate dateInscription;
    private Integer nbEmpruntsEnCours;
    private Integer nbEmpruntsDepasse;
    private Integer nbEmpruntsEffectues;
    private Integer codeReduction;
    @ManyToOne
    private CategorieClient categorieClient;

    public Client() {
    }

    public Client(String nom, String prenom, String adresse, LocalDate dateNaissance, LocalDate dateInscription,
            Integer nbEmpruntsEnCours, Integer nbEmpruntsDepasse, Integer nbEmpruntsEffectues, Integer codeReduction,
            CategorieClient categorieClient) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance;
        this.dateInscription = dateInscription;
        this.nbEmpruntsEnCours = nbEmpruntsEnCours;
        this.nbEmpruntsDepasse = nbEmpruntsDepasse;
        this.nbEmpruntsEffectues = nbEmpruntsEffectues;
        this.codeReduction = codeReduction;
        this.categorieClient = categorieClient;
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

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public LocalDate getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(LocalDate dateInscription) {
        this.dateInscription = dateInscription;
    }

    public Integer getNbEmpruntsEnCours() {
        return nbEmpruntsEnCours;
    }

    public void setNbEmpruntsEnCours(Integer nbEmpruntsEnCours) {
        this.nbEmpruntsEnCours = nbEmpruntsEnCours;
    }

    public Integer getNbEmpruntsDepasse() {
        return nbEmpruntsDepasse;
    }

    public void setNbEmpruntsDepasse(Integer nbEmpruntsDepasse) {
        this.nbEmpruntsDepasse = nbEmpruntsDepasse;
    }

    public Integer getNbEmpruntsEffectues() {
        return nbEmpruntsEffectues;
    }

    public void setNbEmpruntsEffectues(Integer nbEmpruntsEffectues) {
        this.nbEmpruntsEffectues = nbEmpruntsEffectues;
    }

    public Integer getCodeReduction() {
        return codeReduction;
    }

    public void setCodeReduction(Integer codeReduction) {
        this.codeReduction = codeReduction;
    }

    public CategorieClient getCategorieClient() {
        return categorieClient;
    }

    public void setCategorieClient(CategorieClient categorieClient) {
        this.categorieClient = categorieClient;
    }

    @Override
    public String toString() {
        return "Client [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", adresse=" + adresse + ", dateNaissance="
                + dateNaissance + ", dateInscription=" + dateInscription + ", nbEmpruntsEnCours=" + nbEmpruntsEnCours
                + ", nbEmpruntsDepasse=" + nbEmpruntsDepasse + ", nbEmpruntsEffectues=" + nbEmpruntsEffectues
                + ", codeReduction=" + codeReduction + "]";
    }
}
