package ma.ac.emi.ginfo.secondproject.models;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link Student} entity
 */
public class StudentDto implements Serializable {
    private final String nom;
    private final String prenom;

    public StudentDto(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentDto entity = (StudentDto) o;
        return Objects.equals(this.nom, entity.nom) &&
                Objects.equals(this.prenom, entity.prenom);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nom, prenom);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "nom = " + nom + ", " +
                "prenom = " + prenom + ")";
    }
}