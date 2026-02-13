package emi.revision.mediatheque.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    private String nom;
    private String prenom;
    private LocalDate dateReinscription;
    private LocalDate dateRenouvellement;
    private Integer nbEmpruntsEffectues;
    private Integer nbEmpruntsEncours;
    private Integer codeReduction;
    @ManyToOne
    @JoinColumn(name = "category")
    private CategorieClient category;
    @OneToMany(mappedBy = "id.client", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<FicheEmprunt> mesFiches;


    public Client() {
    }


    public Client(String nom, String prenom, LocalDate dateReinscription, LocalDate dateRenouvellement, Integer nbEmpruntsEffectues, Integer nbEmpruntsEncours, Integer codeReduction, CategorieClient category) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateReinscription = dateReinscription;
        this.dateRenouvellement = dateRenouvellement;
        this.nbEmpruntsEffectues = nbEmpruntsEffectues;
        this.nbEmpruntsEncours = nbEmpruntsEncours;
        this.codeReduction = codeReduction;
        this.category = category;
    }


    public Long getIdClient() {
        return this.idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
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

    public LocalDate getDateReinscription() {
        return this.dateReinscription;
    }

    public void setDateReinscription(LocalDate dateReinscription) {
        this.dateReinscription = dateReinscription;
    }

    public LocalDate getDateRenouvellement() {
        return this.dateRenouvellement;
    }

    public void setDateRenouvellement(LocalDate dateRenouvellement) {
        this.dateRenouvellement = dateRenouvellement;
    }

    public Integer getNbEmpruntsEffectues() {
        return this.nbEmpruntsEffectues;
    }

    public void setNbEmpruntsEffectues(Integer nbEmpruntsEffectues) {
        this.nbEmpruntsEffectues = nbEmpruntsEffectues;
    }

    public Integer getNbEmpruntsEncours() {
        return this.nbEmpruntsEncours;
    }

    public void setNbEmpruntsEncours(Integer nbEmpruntsEncours) {
        this.nbEmpruntsEncours = nbEmpruntsEncours;
    }

    public Integer getCodeReduction() {
        return this.codeReduction;
    }

    public void setCodeReduction(Integer codeReduction) {
        this.codeReduction = codeReduction;
    }

    public CategorieClient getCategory() {
        return this.category;
    }

    public void setCategory(CategorieClient category) {
        this.category = category;
    }

    public List<FicheEmprunt> getMesFiches() {
        return this.mesFiches;
    }

    public void setMesFiches(List<FicheEmprunt> mesFiches) {
        this.mesFiches = mesFiches;
    }


    @Override
    public String toString() {
        return "Client [idClient=" + idClient + ", nom=" + nom + ", prenom=" + prenom + ", dateReinscription="
                + dateReinscription + ", dateRenouvellement=" + dateRenouvellement + ", nbEmpruntsEffectues="
                + nbEmpruntsEffectues + ", nbEmpruntsEncours=" + nbEmpruntsEncours + ", codeReduction=" + codeReduction
                + ", category=" + category + "]";
    }



    

    



    
}
