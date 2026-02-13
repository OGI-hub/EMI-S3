package emi.revision.scrutin.models;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PlageHoraire extends Choix{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private LocalTime heureDebut;
    private LocalTime heureFin;


    public PlageHoraire() {
    }


    public PlageHoraire(Integer nbBulletinPour, Integer nbBulletinContre, LocalDate date, LocalTime heureDebut,
            LocalTime heureFin) {
        super(nbBulletinPour, nbBulletinContre);
        this.date = date;
        this.heureDebut = heureDebut;
        this.heureFin = heureFin;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return this.date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getHeureDebut() {
        return this.heureDebut;
    }

    public void setHeureDebut(LocalTime heureDebut) {
        this.heureDebut = heureDebut;
    }

    public LocalTime getHeureFin() {
        return this.heureFin;
    }

    public void setHeureFin(LocalTime heureFin) {
        this.heureFin = heureFin;
    }


    @Override
    public String toString() {
        return "PlageHoraire [id=" + id + ", date=" + date + ", heureDebut=" + heureDebut + ", heureFin=" + heureFin
                + ", toString()=" + super.toString() + "]";
    }

}
