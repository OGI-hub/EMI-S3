package ma.emi.aeroport.model;

import jakarta.persistence.Entity;

@Entity
public class Passager extends Personne {

    // pas d'attributs supplementaires selon le diagramme

    public Passager() {
        super();
    }

    public Passager(String nom) {
        super(nom);
    }

    @Override
    public String toString() {
        return "Passager [id=" + getId() + ", nom=" + getNom() + "]";
    }
}
