package emi.revision.aeroport.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @ManyToMany(mappedBy = "villes")
    private List<Aeroport> aeroport;

    public Ville() {
    }

    public Ville(String nom) {
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

    public List<Aeroport> getAeroport() {
        return this.aeroport;
    }

    public void setAeroport(List<Aeroport> aeroport) {
        this.aeroport = aeroport;
    }

    @Override
    public String toString() {
        return "Ville [id=" + id + ", nom=" + nom + ", aeroport=" + aeroport + "]";
    }

    

}
