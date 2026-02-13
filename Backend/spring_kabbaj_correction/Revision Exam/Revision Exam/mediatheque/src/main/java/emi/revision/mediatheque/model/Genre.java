package emi.revision.mediatheque.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private Integer nbEmprunts;
    @OneToMany(mappedBy = "genre")
    @JsonIgnore
    private List<Document> documents = new ArrayList<>();


    public Genre() {
    }


    public Genre(String nom, Integer nbEmprunts) {
        this.nom = nom;
        this.nbEmprunts = nbEmprunts;
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

    public Integer getNbEmprunts() {
        return this.nbEmprunts;
    }

    public void setNbEmprunts(Integer nbEmprunts) {
        this.nbEmprunts = nbEmprunts;
    }

    public List<Document> getDocuments() {
        return this.documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }


    @Override
    public String toString() {
        return "Genre [id=" + id + ", nom=" + nom + ", nbEmprunts=" + nbEmprunts + "]";
    }





}
