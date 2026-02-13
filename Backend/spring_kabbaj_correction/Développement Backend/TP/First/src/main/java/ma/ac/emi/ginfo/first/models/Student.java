package ma.ac.emi.ginfo.first.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
    @Id
    private String id;
    private String firstName;
    private String familyName;
    private String email;
    private int niveau;

    public Student() {}

    public Student(String id, String firstName, String familyName, int niveau) {
        this.id = id;
        this.firstName = firstName;
        this.familyName = familyName;
        this.niveau = niveau;
    }

    public Student(String id, String firstName, String familyName, String email, int niveau) {
        this.id = id;
        this.firstName = firstName;
        this.familyName = familyName;
        this.email = email;
        this.niveau = niveau;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public String getEmail() {
        return email;
    }

    public int getNiveau() {
        return niveau;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", familyName='" + familyName + '\'' +
                ", email='" + email + '\'' +
                ", niveau='" + niveau + '\'' +
                '}';
    }
}
