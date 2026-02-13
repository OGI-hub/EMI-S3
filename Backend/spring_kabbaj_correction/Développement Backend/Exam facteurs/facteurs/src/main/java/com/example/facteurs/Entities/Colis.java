package com.example.facteurs.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter

public class Colis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numero;
    private Date dateDepot;
    private Date dateReception;
    @ManyToOne
    private Facteur facteur;
    @ManyToMany
    private List<CentrePostal> centrePostalList;
    @ManyToOne
    private Habitant habitantemet;
    @ManyToOne
    private Habitant habitantrecep;

    public Colis(Date dateDepot, Date dateReception) {
        this.dateDepot = dateDepot;
        this.dateReception = dateReception;

    }

    @Override
    public String toString() {
        return "Colis{" +
                "numero=" + numero +
                ", dateDepot=" + dateDepot +
                ", dateReception=" + dateReception +
                '}';
    }
}
