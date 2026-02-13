package emi.revision.aeroport.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Compagnie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @OneToMany(mappedBy = "compagnie", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Vol> vols;


    public Compagnie() {
    }


    public Compagnie(String nom, List<Vol> vols) {
        this.nom = nom;
        this.vols = vols;
    }


    public Compagnie(String nom) {
        this.nom = nom;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Vol> getVols() {
        return this.vols;
    }

    public void setVols(List<Vol> vols) {
        this.vols = vols;
    }


    @Override
    public String toString() {
        return "Compagnie [id=" + id + ", nom=" + nom + "]";
    }



}
