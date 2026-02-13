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
public class Localisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String salle;
    private String rayon;
    @OneToMany(mappedBy = "localisation")
    @JsonIgnore
    private List<Document> documents = new ArrayList<>();
    



    public Localisation() {
    }


    public Localisation(String salle, String rayon) {
        this.salle = salle;
        this.rayon = rayon;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSalle() {
        return this.salle;
    }

    public void setSalle(String salle) {
        this.salle = salle;
    }

    public String getRayon() {
        return this.rayon;
    }

    public void setRayon(String rayon) {
        this.rayon = rayon;
    }




}
