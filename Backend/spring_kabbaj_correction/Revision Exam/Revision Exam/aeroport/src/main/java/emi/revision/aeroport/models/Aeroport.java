package emi.revision.aeroport.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Aeroport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name="aeroport"), inverseJoinColumns = @JoinColumn(name = "ville"))
    @JsonIgnore
    private List<Ville> villes;
    @OneToMany(mappedBy = "aeroportDepart", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Vol> volsDepart;
    @OneToMany(mappedBy = "aeroportArrivee", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Vol> volsArrivee;
    @OneToMany(mappedBy = "id.aeroport", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Escale> escales;


    public Aeroport() {
    }

    

    public Aeroport(String nom) {
        this.nom = nom;
    }



    public Aeroport(String nom, List<Ville> villes) {
        this.nom = nom;
        this.villes = villes;
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

    public List<Ville> getVilles() {
        return this.villes;
    }

    public void setVilles(List<Ville> villes) {
        this.villes = villes;
    }



    @Override
    public String toString() {
        return "Aeroport [id=" + id + ", nom=" + nom + ", villes=" + villes + "]";
    }

}
