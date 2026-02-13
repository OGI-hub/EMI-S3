package ma.ac.emi.ginfo.restfull.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Pret {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JsonIgnore
    private Livre livre;

    @ManyToOne
    private Adhrent adhrent;

    private LocalDate datePret;

    private LocalDate dateRetour;

    public Pret() {
    }

    public Pret(Livre livre, Adhrent adhrent, LocalDate datePret) {
        this.livre = livre;
        this.adhrent = adhrent;
        this.datePret = datePret;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Livre getLivre() {
        return livre;
    }

    public void setLivre(Livre livre) {
        this.livre = livre;
    }

    public Adhrent getAdhrent() {
        return adhrent;
    }

    public void setAdhrent(Adhrent adhrent) {
        this.adhrent = adhrent;
    }

    public LocalDate getDatePret() {
        return datePret;
    }

    public void setDatePret(LocalDate datePret) {
        this.datePret = datePret;
    }

    public LocalDate getDateRetour() {
        return dateRetour;
    }

    public void setDateRetour(LocalDate dateRetour) {
        this.dateRetour = dateRetour;
    }


    @Override
    public String toString() {
        return "Pret{" +
                ", dateRetour=" + dateRetour +
                ", livre=" + livre.getTitre() +
                ", adhrent=" + adhrent.getNom() +
                '}';
    }
}
