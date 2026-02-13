package com.example.facteurs.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Facteur extends Personne {
    @OneToMany(mappedBy = "facteur")
    private List<Colis> colisList;
    @ManyToOne
    private CentrePostal centrePostal;

    public Facteur(String nom, String rue, String quartier, String ville) {
        super(nom, rue, quartier, ville);
    }
}
