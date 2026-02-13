package ma.ac.emi.ginfo.secondproject.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.List;

@Entity
public class Groupe {

    @Id
    private String nom;
    @OneToMany(mappedBy = "groupe")
//    @Transient
    private List<Student> students;

    public Groupe() {

    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNom() {
        return nom;
    }

    public Groupe(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Group{" +
                "nom='" + nom + '\'' +
                ", students=" + students +
                '}';
    }

    public int size() {
        return students.size();
    }

    public boolean add(Student student) {
        return students.add(student);
    }

    public boolean containsAll(Collection<?> c) {
        return students.containsAll(c);
    }
}
