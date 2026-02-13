package ma.emi.aeroport.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class Client extends Personne {

    @OneToMany(mappedBy = "client")
    private List<Reservation> reservations;

    public Client() {
        super();
    }

    public Client(String nom) {
        super(nom);
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
