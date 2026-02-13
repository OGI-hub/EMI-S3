package com.example.facteurs.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

public class CentrePostal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private int numero;
    private String quartier;
    private String ville;
    @OneToMany(mappedBy = "centrePostal") //Servir plusieur habitants
    private List<Habitant> habitantList;
    @OneToMany(mappedBy = "centrePostal")
    private List<Facteur> facteurList;
    @ManyToMany(mappedBy = "centrePostalList")
    private List<Colis> colisList;
    public CentrePostal(String nom, int numero, String quartier, String ville) {
        this.nom = nom;
        this.numero = numero;
        this.quartier = quartier;
        this.ville = ville;
    }

    @Override
    public String toString() {
        return "CentrePostal{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", numero=" + numero +
                ", quartier='" + quartier + '\'' +
                ", ville='" + ville + '\'' +
                '}';
    }
}
