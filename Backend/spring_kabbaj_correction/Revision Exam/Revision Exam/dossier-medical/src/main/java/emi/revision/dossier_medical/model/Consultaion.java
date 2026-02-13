package emi.revision.dossier_medical.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Consultaion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dateConsultation;
    private LocalTime heure;
    private String lieur;
    private Character etatConsultation;


    public Consultaion() {
    }

    public Consultaion(Long id, LocalDate dateConsultation, LocalTime heure, String lieur, Character etatConsultation) {
        this.id = id;
        this.dateConsultation = dateConsultation;
        this.heure = heure;
        this.lieur = lieur;
        this.etatConsultation = etatConsultation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Character getEtatConsultation() {
        return etatConsultation;
    }

    public void setEtatConsultation(Character etatConsultation) {
        this.etatConsultation = etatConsultation;
    }

    public String getLieur() {
        return lieur;
    }

    public void setLieur(String lieur) {
        this.lieur = lieur;
    }

    public LocalTime getHeure() {
        return heure;
    }

    public void setHeure(LocalTime heure) {
        this.heure = heure;
    }

    public LocalDate getDateConsultation() {
        return dateConsultation;
    }

    public void setDateConsultation(LocalDate dateConsultation) {
        this.dateConsultation = dateConsultation;
    }
}
