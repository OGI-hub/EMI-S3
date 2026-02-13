package emi.revision.aeroport.models;

import java.time.LocalTime;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;


@Entity
public class Escale {
    @EmbeddedId
    private PK id;
    private LocalTime heureDepart;
    private LocalTime heureArrivee;



    public Escale() {
    }

    public Escale(Vol vol, Aeroport aeroport, LocalTime heureDepart, LocalTime heureArrivee) {
        this.id = new PK(aeroport, vol);
        this.heureDepart = heureDepart;
        this.heureArrivee = heureArrivee;
    }


    public PK getId() {
        return this.id;
    }

    public void setId(PK id) {
        this.id = id;
    }

    public LocalTime getHeureDepart() {
        return this.heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalTime getHeureArrivee() {
        return this.heureArrivee;
    }

    public void setHeureArrivee(LocalTime heureArrivee) {
        this.heureArrivee = heureArrivee;
    }

    @Override
    public String toString() {
        return "Escale [id=" + id + ", heureDepart=" + heureDepart + ", heureArrivee=" + heureArrivee + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((heureDepart == null) ? 0 : heureDepart.hashCode());
        result = prime * result + ((heureArrivee == null) ? 0 : heureArrivee.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Escale other = (Escale) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (heureDepart == null) {
            if (other.heureDepart != null)
                return false;
        } else if (!heureDepart.equals(other.heureDepart))
            return false;
        if (heureArrivee == null) {
            if (other.heureArrivee != null)
                return false;
        } else if (!heureArrivee.equals(other.heureArrivee))
            return false;
        return true;
    }

    

    
}
