package ma.ac.emi.ginfo.secondproject.models;

import javax.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mat;
    private String nom;
    private String prenom;
    private String email;
    private String niveau;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "gr")
    private Groupe groupe;

    public Student(String nom, String prenom, String email, String niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.niveau = niveau;
    }

    public Student() {
    }

    public void setMat(int mat) {
        this.mat = mat;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public int getMat() {
        return mat;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getEmail() {
        return email;
    }

    public String getNiveau() {
        return niveau;
    }

    @Override
    public String toString() {
        return "Student{" +
                "mat=" + mat +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", niveau='" + niveau + '\'' +
                '}';
    }
}
