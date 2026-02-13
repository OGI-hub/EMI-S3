package ma.emi.aeroport.model;

import jakarta.persistence.Entity;

@Entity
public class Passager extends Personne {

    public Passager() {
        super();
    }

    public Passager(String nom) {
        super(nom);
    }
}
