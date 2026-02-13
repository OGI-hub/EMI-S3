package com.example.facteurs.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String rue;
    private String quartier;
    private String ville;

    public Personne(String nom, String rue, String quartier, String ville) {
        this.nom = nom;
        this.rue = rue;
        this.quartier = quartier;
        this.ville = ville;
    }

    @Override
    public String toString() {
        return "Personne{" +
                "id='" + id + '\'' +
                ", nom='" + nom + '\'' +
                ", rue='" + rue + '\'' +
                ", quartier='" + quartier + '\'' +
                ", ville='" + ville + '\'' +
                '}';
    }
}
