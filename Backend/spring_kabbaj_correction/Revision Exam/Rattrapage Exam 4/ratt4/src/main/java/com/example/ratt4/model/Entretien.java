package com.example.ratt4.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Entretien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateHeure;
    private Integer note;
    @ManyToOne
    private Candidature candidature;


    public Entretien() {
    }


    public Entretien(LocalDateTime dateHeure, Integer note, Candidature candidature) {
        this.dateHeure = dateHeure;
        this.note = note;
        this.candidature = candidature;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateHeure() {
        return this.dateHeure;
    }

    public void setDateHeure(LocalDateTime dateHeure) {
        this.dateHeure = dateHeure;
    }

    public Integer getNote() {
        return this.note;
    }

    public void setNote(Integer note) {
        this.note = note;
    }

    public Candidature getCandidature() {
        return this.candidature;
    }

    public void setCandidature(Candidature candidature) {
        this.candidature = candidature;
    }


    @Override
    public String toString() {
        return "Entretien [id=" + id + ", dateHeure=" + dateHeure + ", note=" + note + ", candidature=" + candidature
                + "]";
    }

}
