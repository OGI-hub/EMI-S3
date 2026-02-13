package emi.revision.mediatheque.model;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;

@Entity
public class FicheEmprunt {
    @EmbeddedId
    private PK id;
    private LocalDate dateEmprunt;
    private LocalDate dateLimite;
    private LocalDate dateRappel;
    @Transient
    private Boolean depasse;
    @Transient
    private Double tarifs;


    public FicheEmprunt() {
    }

    public FicheEmprunt(Document document, Client client, LocalDate dateEmprunt, LocalDate dateLimite, LocalDate dateRappel) {
        this.id = new PK(client, document);
        this.dateEmprunt = dateEmprunt;
        this.dateLimite = dateLimite;
        this.dateRappel = dateRappel;
    }

    public PK getId() {
        return this.id;
    }

    public void setId(PK id) {
        this.id = id;
    }

    public LocalDate getDateEmprunt() {
        return this.dateEmprunt;
    }

    public void setDateEmprunt(LocalDate dateEmprunt) {
        this.dateEmprunt = dateEmprunt;
    }

    public LocalDate getDateLimite() {
        return this.dateLimite;
    }

    public void setDateLimite(LocalDate dateLimite) {
        this.dateLimite = dateLimite;
    }

    public LocalDate getDateRappel() {
        return this.dateRappel;
    }

    public void setDateRappel(LocalDate dateRappel) {
        this.dateRappel = dateRappel;
    }

    public Boolean isDepasse() {
        return LocalDate.now().isAfter(this.dateLimite);
    }
    public Double getTarif() {
        return this.id.getDocument().getTarif() + this.id.getDocument().getTarif() * ChronoUnit.DAYS.between(this.dateLimite, LocalDate.now());
    }
    

    



}
