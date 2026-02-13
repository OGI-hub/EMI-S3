package emi.revision.dossier_medical.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class FicheDeSoin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long numeroFiche;
    private LocalDate dateCreation;
    private String agentCreateur;
    private String adresseCreateur;
    @OneToMany
    @JoinColumn(name = "fichesPayees", referencedColumnName = "numeroFiche")
    private List<FicheDeSoin> fichesPayees;


    public FicheDeSoin() {
    }


    public FicheDeSoin(LocalDate dateCreation, String agentCreateur, String adresseCreateur) {
        this.dateCreation = dateCreation;
        this.agentCreateur = agentCreateur;
        this.adresseCreateur = adresseCreateur;
    }

    public Long getNumeroFiche() {
        return this.numeroFiche;
    }

    public void setNumeroFiche(Long numeroFiche) {
        this.numeroFiche = numeroFiche;
    }

    public LocalDate getDateCreation() {
        return this.dateCreation;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getAgentCreateur() {
        return this.agentCreateur;
    }

    public void setAgentCreateur(String agentCreateur) {
        this.agentCreateur = agentCreateur;
    }

    public String getAdresseCreateur() {
        return this.adresseCreateur;
    }

    public void setAdresseCreateur(String adresseCreateur) {
        this.adresseCreateur = adresseCreateur;
    }

    public List<FicheDeSoin> getFichesPayees() {
        return this.fichesPayees;
    }

    public void setFichesPayees(List<FicheDeSoin> fichesPayees) {
        this.fichesPayees = fichesPayees;
    }

}
