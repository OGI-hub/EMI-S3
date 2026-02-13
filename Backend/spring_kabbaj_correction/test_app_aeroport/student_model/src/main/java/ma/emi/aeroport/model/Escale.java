package ma.emi.aeroport.model;

import jakarta.persistence.*;
import java.time.LocalTime;

@Entity
public class Escale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalTime heureDepart;
    private LocalTime heureArrive;

    @ManyToOne
    private Vol vol;

    @ManyToOne
    private Ville ville;

    public Escale() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getHeureDepart() {
        return heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalTime getHeureArrive() {
        return heureArrive;
    }

    public void setHeureArrive(LocalTime heureArrive) {
        this.heureArrive = heureArrive;
    }

    public Vol getVol() {
        return vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    public Ville getVille() {
        return ville;
    }

    public void setVille(Ville ville) {
        this.ville = ville;
    }
}
