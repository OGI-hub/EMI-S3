package ma.emi.aeroport.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Aeroport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;

    @OneToMany(mappedBy = "aeroportDepart")
    List<Vol> volsDepart;

    @OneToMany(mappedBy = "aeroportArrive")
    List<Vol> volsArrive;

    public Aeroport() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Vol> getVolsDepart() {
        return volsDepart;
    }

    public void setVolsDepart(List<Vol> volsDepart) {
        this.volsDepart = volsDepart;
    }

    public List<Vol> getVolsArrive() {
        return volsArrive;
    }

    public void setVolsArrive(List<Vol> volsArrive) {
        this.volsArrive = volsArrive;
    }
}
