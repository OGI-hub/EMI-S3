package ma.ac.emi.ginfo.restfull.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
@Entity
public class Adhrent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matricule;
    @Column(length = 50)
    private String nom;
    @Column(length = 50)
    private String mail;
    @OneToMany(mappedBy = "adhrent", fetch = FetchType.EAGER)
    private List<Pret> prets = new ArrayList<>();

    public Adhrent() {
    }

    public Adhrent(String nom, String mail) {
        this.nom = nom;
        this.mail = mail;
    }

    public Long getMatricule() {
        return matricule;
    }

    public void setMatricule(Long matricule) {
        this.matricule = matricule;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int size() {
        return prets.size();
    }

    public boolean contains(Object o) {
        return prets.contains(o);
    }

    public boolean add(Pret pret) {
        return prets.add(pret);
    }

    public boolean remove(Object o) {
        return prets.remove(o);
    }

    public Pret get(int index) {
        return prets.get(index);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Adhrent adhrent = (Adhrent) o;
        return matricule.equals(adhrent.matricule);
    }

    @Override
    public int hashCode() {
        return Objects.hash(matricule);
    }

    @Override
    public String toString() {
        return "Adhrent{" +
                "matricule=" + matricule +
                ", nom='" + nom + '\'' +
                ", mail='" + mail + '\'' +
                ", prets=" + prets +
                '}';
    }
}
