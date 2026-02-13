package emi.revision.aeroport.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Passager extends Personne {
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "passager")
    @JsonIgnore
    private List<Reservation> reservations;


    public Passager() {
    }


    public Passager(String nom, List<Reservation> reservations) {
        super(nom);
        this.reservations = reservations;
    }

    public List<Reservation> getReservations() {
        return this.reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }


    @Override
    public String toString() {
        return "Passager [toString()=" + super.toString() + "]";
    }



    

}
