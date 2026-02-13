package emi.revision.dossier_medical.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;

@Entity
public class DossierMedical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numero;
    private LocalDate dateCreation;
    private String codeAccesPatient;
    @OneToMany
    private List<FicheDeSoin> fiches = new ArrayList<>();


    public DossierMedical() {
    }


    public DossierMedical(LocalDate dateCreation, String codeAccesPatient) {
        this.dateCreation = dateCreation;
        this.codeAccesPatient = codeAccesPatient;
    }


    public DossierMedical(LocalDate dateCreation, String codeAccesPatient, List<FicheDeSoin> fiches) {
        this.dateCreation = dateCreation;
        this.codeAccesPatient = codeAccesPatient;
        this.fiches = fiches;
    }

    public Long getNumero() {
        return this.numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public LocalDate getDateCreation() {
        return this.dateCreation;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getCodeAccesPatient() {
        return this.codeAccesPatient;
    }

    public void setCodeAccesPatient(String codeAccesPatient) {
        this.codeAccesPatient = codeAccesPatient;
    }

    public List<FicheDeSoin> getFiches() {
        return this.fiches;
    }

    public void setFiches(List<FicheDeSoin> fiches) {
        this.fiches = fiches;
    }


    @Override
    public String toString() {
        return "DossierMedical [numero=" + numero + ", dateCreation=" + dateCreation + ", codeAccesPatient="
                + codeAccesPatient + ", fiches=" + fiches + "]";
    }

}
