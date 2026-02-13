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
public class Habitant extends Personne{
    private String email;
    private String telephone;
    @ManyToOne
    private CentrePostal centrePostal;
    @OneToMany(mappedBy = "habitantemet")
    private List<Colis> colisListemet;
    @OneToMany(mappedBy = "habitantrecep")
    private List<Colis> colisListrecep;

    public Habitant(String nom, String rue, String quartier, String ville, String email, String telephone) {
        super(nom, rue, quartier, ville);
        this.email = email;
        this.telephone = telephone;
    }
}
