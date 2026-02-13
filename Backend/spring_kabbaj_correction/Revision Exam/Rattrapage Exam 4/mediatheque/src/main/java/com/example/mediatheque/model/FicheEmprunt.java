package com.example.mediatheque.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class FicheEmprunt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dateEmprunt;
    private LocalDate dateLimite;
    private LocalDate dateRappel;
    private Boolean depasse;
    private Double tarif;
    @ManyToOne
    private Document document;
    @ManyToOne
    private Client client;

    public FicheEmprunt() {
    }

    public FicheEmprunt(LocalDate dateEmprunt, LocalDate dateLimite, LocalDate dateRappel, Boolean depasse,
            Double tarif, Document document, Client client) {
        this.dateEmprunt = dateEmprunt;
        this.dateLimite = dateLimite;
        this.dateRappel = dateRappel;
        this.depasse = depasse;
        this.tarif = tarif;
        this.document = document;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateEmprunt() {
        return dateEmprunt;
    }

    public void setDateEmprunt(LocalDate dateEmprunt) {
        this.dateEmprunt = dateEmprunt;
    }

    public LocalDate getDateLimite() {
        return dateLimite;
    }

    public void setDateLimite(LocalDate dateLimite) {
        this.dateLimite = dateLimite;
    }

    public LocalDate getDateRappel() {
        return dateRappel;
    }

    public void setDateRappel(LocalDate dateRappel) {
        this.dateRappel = dateRappel;
    }

    public Boolean getDepasse() {
        return depasse;
    }

    public void setDepasse(Boolean depasse) {
        this.depasse = depasse;
    }

    public Double getTarif() {
        return tarif;
    }

    public void setTarif(Double tarif) {
        this.tarif = tarif;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "FicheEmprunt [id=" + id + ", dateEmprunt=" + dateEmprunt + ", dateLimite=" + dateLimite
                + ", dateRappel=" + dateRappel + ", depasse=" + depasse + ", tarif=" + tarif + "]";
    }
}
