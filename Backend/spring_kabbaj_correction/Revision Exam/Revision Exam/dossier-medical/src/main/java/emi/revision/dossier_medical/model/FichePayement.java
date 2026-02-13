package emi.revision.dossier_medical.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;

@Entity
public class FichePayement extends FicheDeSoin{
    private LocalDate dateExigibilite;
    private LocalDate datePayement;
    private Double montant;
    private Boolean indicateurPayement;


    public FichePayement() {
    }

    public FichePayement(LocalDate dateExigibilite, LocalDate datePayement, Double montant, Boolean indicateurPayement) {
        this.dateExigibilite = dateExigibilite;
        this.datePayement = datePayement;
        this.montant = montant;
        this.indicateurPayement = indicateurPayement;
    }

    public LocalDate getDateExigibilite() {
        return this.dateExigibilite;
    }

    public void setDateExigibilite(LocalDate dateExigibilite) {
        this.dateExigibilite = dateExigibilite;
    }

    public LocalDate getDatePayement() {
        return this.datePayement;
    }

    public void setDatePayement(LocalDate datePayement) {
        this.datePayement = datePayement;
    }

    public Double getMontant() {
        return this.montant;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public Boolean isIndicateurPayement() {
        return this.indicateurPayement;
    }

    public Boolean getIndicateurPayement() {
        return this.indicateurPayement;
    }

    public void setIndicateurPayement(Boolean indicateurPayement) {
        this.indicateurPayement = indicateurPayement;
    }

}
