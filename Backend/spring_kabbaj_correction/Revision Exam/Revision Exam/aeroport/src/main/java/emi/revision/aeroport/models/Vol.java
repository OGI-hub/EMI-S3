package emi.revision.aeroport.models;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Vol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numVol;
    private LocalDate jourDepart;
    private LocalTime heureDepart;
    private LocalDate jourArrivee;
    private LocalTime heureArrivee;
    @ManyToOne
    private Aeroport aeroportDepart;
    @ManyToOne
    private Aeroport aeroportArrivee;
    @ManyToOne
    private Compagnie compagnie;
    @OneToMany(mappedBy = "id.vol", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Escale> escales = new ArrayList<>();


    public Vol() {
    }


    public Vol(LocalDate jourDepart, LocalTime heureDepart, LocalDate jourArrivee, LocalTime heureArrivee,
            Aeroport aeroportDepart, Aeroport aeroportArrivee, Compagnie compagnie, List<Escale> escales) {
        this.jourDepart = jourDepart;
        this.heureDepart = heureDepart;
        this.jourArrivee = jourArrivee;
        this.heureArrivee = heureArrivee;
        this.aeroportDepart = aeroportDepart;
        this.aeroportArrivee = aeroportArrivee;
        this.compagnie = compagnie;
        this.escales = escales;
    }

    


    public Vol(LocalDate jourDepart, LocalTime heureDepart, LocalDate jourArrivee, LocalTime heureArrivee,
            Aeroport aeroportDepart, Aeroport aeroportArrivee, Compagnie compagnie) {
        this.jourDepart = jourDepart;
        this.heureDepart = heureDepart;
        this.jourArrivee = jourArrivee;
        this.heureArrivee = heureArrivee;
        this.aeroportDepart = aeroportDepart;
        this.aeroportArrivee = aeroportArrivee;
        this.compagnie = compagnie;
    }

    


    public boolean add(Escale arg0) {
        return escales.add(arg0);
    }


    public boolean contains(Object arg0) {
        return escales.contains(arg0);
    }


    public Escale get(int arg0) {
        return escales.get(arg0);
    }


    public boolean isEmpty() {
        return escales.isEmpty();
    }


    public boolean remove(Object arg0) {
        return escales.remove(arg0);
    }


    public Long getNumVol() {
        return this.numVol;
    }

    public void setNumVol(Long numVol) {
        this.numVol = numVol;
    }

    public LocalDate getJourDepart() {
        return this.jourDepart;
    }

    public void setJourDepart(LocalDate jourDepart) {
        this.jourDepart = jourDepart;
    }

    public LocalTime getHeureDepart() {
        return this.heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalDate getJourArrivee() {
        return this.jourArrivee;
    }

    public void setJourArrivee(LocalDate jourArrivee) {
        this.jourArrivee = jourArrivee;
    }

    public LocalTime getHeureArrivee() {
        return this.heureArrivee;
    }

    public void setHeureArrivee(LocalTime heureArrivee) {
        this.heureArrivee = heureArrivee;
    }

    public Aeroport getAeroportDepart() {
        return this.aeroportDepart;
    }

    public void setAeroportDepart(Aeroport aeroportDepart) {
        this.aeroportDepart = aeroportDepart;
    }

    public Aeroport getAeroportArrivee() {
        return this.aeroportArrivee;
    }

    public void setAeroportArrivee(Aeroport aeroportArrivee) {
        this.aeroportArrivee = aeroportArrivee;
    }

    public Compagnie getCompagnie() {
        return this.compagnie;
    }

    public void setCompagnie(Compagnie compagnie) {
        this.compagnie = compagnie;
    }

    public List<Escale> getEscales() {
        return this.escales;
    }

    public void setEscales(List<Escale> escales) {
        this.escales = escales;
    }


    @Override
    public String toString() {
        return "Vol [numVol=" + numVol + ", jourDepart=" + jourDepart + ", heureDepart=" + heureDepart
                + ", jourArrivee=" + jourArrivee + ", heureArrivee=" + heureArrivee + ", aeroportDepart="
                + aeroportDepart + ", aeroportArrivee=" + aeroportArrivee + ", compagnie=" + compagnie + "]";
    }

    
    


}
