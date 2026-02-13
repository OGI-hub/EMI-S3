package ma.emi.ginf.gestion_notes.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class PK {
    @ManyToOne
    @JoinColumn(name="matiere_id")
    private Matiere matiere;
    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;


    public PK() {
    }

    public PK(Matiere matiere, Student student) {
        this.matiere = matiere;
        this.student = student;
    }

    public Matiere getMatiere() {
        return this.matiere;
    }

    public void setMatiere(Matiere matiere) {
        this.matiere = matiere;
    }

    public Student getStudent() {
        return this.student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    @Override
    public String toString() {
        return "PK [matiere=" + matiere + ", student=" + student + "]";
    }
    

}
