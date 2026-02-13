package ma.emi.ginf.gestion_notes.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
public class Student extends Personne {
    @Column(nullable = false)
    private Integer niveau = 1;
    private Boolean anneeReserve = false;
    @OneToMany(mappedBy = "id.student")
    private List<Note> notes = new ArrayList<>();

    


    public Student() {
        super();
    }


    public Student(Long id, String nom, String prenom, LocalDate dateDeNaissance, Integer niveau,
            Boolean anneeReserve) {
        super(id, nom, prenom, dateDeNaissance);
        this.niveau = niveau;
        this.anneeReserve = anneeReserve;
    }
    

    public Integer getNiveau() {
        return this.niveau;
    }

    public void setNiveau(Integer niveau) {
        this.niveau = niveau;
    }

    public Boolean isAnneeReserve() {
        return this.anneeReserve;
    }

    public Boolean getAnneeReserve() {
        return this.anneeReserve;
    }

    public void setAnneeReserve(Boolean anneeReserve) {
        this.anneeReserve = anneeReserve;
    }

    public List<Note> getNotes() {
        return this.notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }


    @Override
    public String toString() {
        return "Student [niveau=" + niveau + ", anneeReserve=" + anneeReserve + ", toString()=" + super.toString()
                + "]";
    }

    
}
