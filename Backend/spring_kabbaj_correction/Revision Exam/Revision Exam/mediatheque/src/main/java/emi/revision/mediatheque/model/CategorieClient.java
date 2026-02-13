package emi.revision.mediatheque.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class CategorieClient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategory;
    private String nomCat;
    private Integer nbEmpruntsMax;
    private Double cotisation;
    private Double coefTarif;
    private Double coefDuree;
    private boolean codeReductionActif;
    @OneToMany(mappedBy="category")
    @JsonIgnore
    private List<Client> clients;


    public CategorieClient() {
    }


    public CategorieClient(String nomCat, Integer nbEmpruntsMax, Double cotisation, Double coefTarif, Double coefDuree, Boolean codeReductionActif) {
        this.nomCat = nomCat;
        this.nbEmpruntsMax = nbEmpruntsMax;
        this.cotisation = cotisation;
        this.coefTarif = coefTarif;
        this.coefDuree = coefDuree;
        this.codeReductionActif = codeReductionActif;
    }

    


    public CategorieClient(String nomCat, Integer nbEmpruntsMax, Double cotisation) {
        this.nomCat = nomCat;
        this.nbEmpruntsMax = nbEmpruntsMax;
        this.cotisation = cotisation;
        this.coefDuree = 0.0;
        this.coefTarif = 0.0;
        this.codeReductionActif = false;
    }


    public Long getIdCategory() {
        return this.idCategory;
    }

    public void setIdCategory(Long idCategory) {
        this.idCategory = idCategory;
    }

    public String getNomCat() {
        return this.nomCat;
    }

    public void setNomCat(String nomCat) {
        this.nomCat = nomCat;
    }

    public Integer getNbEmpruntsMax() {
        return this.nbEmpruntsMax;
    }

    public void setNbEmpruntsMax(Integer nbEmpruntsMax) {
        this.nbEmpruntsMax = nbEmpruntsMax;
    }

    public Double getCotisation() {
        return this.cotisation;
    }

    public void setCotisation(Double cotisation) {
        this.cotisation = cotisation;
    }

    public Double getCoefTarif() {
        return this.coefTarif;
    }

    public void setCoefTarif(Double coefTarif) {
        this.coefTarif = coefTarif;
    }

    public Double getCoefDuree() {
        return this.coefDuree;
    }

    public void setCoefDuree(Double coefDuree) {
        this.coefDuree = coefDuree;
    }

    public Boolean isCodeReductionActif() {
        return this.codeReductionActif;
    }

    public Boolean getCodeReductionActif() {
        return this.codeReductionActif;
    }

    public void setCodeReductionActif(Boolean codeReductionActif) {
        this.codeReductionActif = codeReductionActif;
    }


    public List<Client> getClients() {
        return this.clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }


    @Override
    public String toString() {
        return "CategorieClient [idCategory=" + idCategory + ", nomCat=" + nomCat + ", nbEmpruntsMax=" + nbEmpruntsMax
                + ", cotisation=" + cotisation + ", coefTarif=" + coefTarif + ", coefDuree=" + coefDuree
                + ", codeReductionActif=" + codeReductionActif + "]";
    }


    public boolean add(Client arg0) {
        return clients.add(arg0);
    }


    public boolean contains(Object arg0) {
        return clients.contains(arg0);
    }


    public Client get(int arg0) {
        return clients.get(arg0);
    }


    public boolean isEmpty() {
        return clients.isEmpty();
    }


    public boolean remove(Object arg0) {
        return clients.remove(arg0);
    }


    public int size() {
        return clients.size();
    }

    


    
}
