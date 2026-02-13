package emi.revision.dossier_medical.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nSS;
    private String nom;
    private String prenom;
    private LocalDate dateDeNaissance;
    private Character sexe;
    private String addresse;
    private Integer numeroTelephone;
    @OneToOne
    @JoinColumn(name = "dossier", referencedColumnName = "numero")
    private DossierMedical dossier;


    public Patient() {
    }


    public Patient(String nSS, String nom, String prenom, LocalDate dateDeNaissance, Character sexe, String addresse,
            Integer numeroTelephone) {
        this.nSS = nSS;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.sexe = sexe;
        this.addresse = addresse;
        this.numeroTelephone = numeroTelephone;
    }


    public Patient(String nSS, String nom, String prenom, LocalDate dateDeNaissance, Character sexe, String addresse,
            Integer numeroTelephone, DossierMedical dossier) {
        this.nSS = nSS;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.sexe = sexe;
        this.addresse = addresse;
        this.numeroTelephone = numeroTelephone;
        this.dossier = dossier;
    }



    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNSS() {
        return this.nSS;
    }

    public void setNSS(String nSS) {
        this.nSS = nSS;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateDeNaissance() {
        return this.dateDeNaissance;
    }

    public void setDateDeNaissance(LocalDate dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }

    public Character getSexe() {
        return this.sexe;
    }

    public void setSexe(Character sexe) {
        this.sexe = sexe;
    }

    public String getAddresse() {
        return this.addresse;
    }

    public void setAddresse(String addresse) {
        this.addresse = addresse;
    }

    public Integer getNumeroTelephone() {
        return this.numeroTelephone;
    }

    public void setNumeroTelephone(Integer numeroTelephone) {
        this.numeroTelephone = numeroTelephone;
    }

    public DossierMedical getDossier() {
        return this.dossier;
    }

    public void setDossier(DossierMedical dossier) {
        this.dossier = dossier;
    }


}
