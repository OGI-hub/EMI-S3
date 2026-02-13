package ma.emi.aeroport.model;

import jakarta.persistence.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numVol;
    private LocalDate jourDepart;
    private LocalTime heureDepart;
    private LocalDate jourArrive;
    private LocalTime heureArrive;

    @ManyToOne
    private Compagnie compagnie;

    @ManyToOne
    private Aeroport aeroportDepart;

    @ManyToOne
    private Aeroport aeroportArrive;

    @OneToMany(mappedBy = "vol")
    private List<Escale> escales;

    @OneToMany(mappedBy = "vol")
    private List<Reservation> reservations;

    // constructeur vide
    public Vol() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumVol() {
        return numVol;
    }

    public void setNumVol(String numVol) {
        this.numVol = numVol;
    }

    public LocalDate getJourDepart() {
        return jourDepart;
    }

    public void setJourDepart(LocalDate jourDepart) {
        this.jourDepart = jourDepart;
    }

    public LocalTime getHeureDepart() {
        return heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalDate getJourArrive() {
        return jourArrive;
    }

    public void setJourArrive(LocalDate jourArrive) {
        this.jourArrive = jourArrive;
    }

    public LocalTime getHeureArrive() {
        return heureArrive;
    }

    public void setHeureArrive(LocalTime heureArrive) {
        this.heureArrive = heureArrive;
    }

    public Compagnie getCompagnie() {
        return compagnie;
    }

    public void setCompagnie(Compagnie compagnie) {
        this.compagnie = compagnie;
    }

    public Aeroport getAeroportDepart() {
        return aeroportDepart;
    }

    public void setAeroportDepart(Aeroport aeroportDepart) {
        this.aeroportDepart = aeroportDepart;
    }

    public Aeroport getAeroportArrive() {
        return aeroportArrive;
    }

    public void setAeroportArrive(Aeroport aeroportArrive) {
        this.aeroportArrive = aeroportArrive;
    }

    public List<Escale> getEscales() {
        return escales;
    }

    public void setEscales(List<Escale> escales) {
        this.escales = escales;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    @Override
    public String toString() {
        return "Vol{" +
                "numVol='" + numVol + '\'' +
                ", jourDepart=" + jourDepart +
                ", heureDepart=" + heureDepart +
                '}';
    }
}
