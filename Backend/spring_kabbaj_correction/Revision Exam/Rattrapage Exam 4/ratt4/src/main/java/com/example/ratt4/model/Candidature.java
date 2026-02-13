package com.example.ratt4.model;

import java.time.LocalDate;

import com.example.ratt4.helper.CandidatureStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Candidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dateSoumission;
    private CandidatureStatus statut;
    @ManyToOne(fetch = FetchType.LAZY)
    private Candidat candidat;


    public Candidature() {
    }


    public Candidature(LocalDate dateSoumission, CandidatureStatus statut, Candidat candidat) {
        this.dateSoumission = dateSoumission;
        this.statut = statut;
        this.candidat = candidat;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateSoumission() {
        return this.dateSoumission;
    }

    public void setDateSoumission(LocalDate dateSoumission) {
        this.dateSoumission = dateSoumission;
    }

    public CandidatureStatus getStatut() {
        return this.statut;
    }

    public void setStatut(CandidatureStatus statut) {
        this.statut = statut;
    }

    public Candidat getCandidat() {
        return this.candidat;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }


    @Override
    public String toString() {
        return "Candidature [id=" + id + ", dateSoumission=" + dateSoumission + ", statut=" + statut + ", candidat="
                + candidat + "]";
    }
}
