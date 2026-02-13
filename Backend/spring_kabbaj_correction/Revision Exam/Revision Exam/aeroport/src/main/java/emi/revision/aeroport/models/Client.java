package emi.revision.aeroport.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Client extends Personne {
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "client")
    @JsonIgnore
    private List<Reservation> reservations;


    public Client() {
    }


    public Client(String nom, List<Reservation> reservations) {
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
        return "Client [toString()=" + super.toString() + "]";
    }


   


   

    
}
