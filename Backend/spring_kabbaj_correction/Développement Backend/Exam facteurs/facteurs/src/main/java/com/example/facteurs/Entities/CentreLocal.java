package com.example.facteurs.Entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class CentreLocal extends CentrePostal{
    public CentreLocal(String nom, int numero, String quartier, String ville) {
        super(nom, numero, quartier, ville);
    }


}
