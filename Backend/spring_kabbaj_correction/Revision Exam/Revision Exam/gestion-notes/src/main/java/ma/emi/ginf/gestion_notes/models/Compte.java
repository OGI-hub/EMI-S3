package ma.emi.ginf.gestion_notes.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@Entity
public class Compte {

    @Id
    private Long id;
    @Column(nullable = false, unique = true)
    @Email
    private String email;
    @Column(nullable = false)
    private String password;
    private Boolean isActive = true;
    private Boolean isLocked = false;

    @OneToOne(mappedBy = "compte")
    @JoinColumn(name = "matricule", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonBackReference
    private Personne personne;


    public Compte() {
    }

    public Compte(@NotNull String email, @NotNull String password, Boolean isActive, Boolean isLocked, Personne personne) {
        this.id = personne.getMatricule();
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.isLocked = isLocked;
        this.personne = personne;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean isIsActive() {
        return this.isActive;
    }

    public Boolean getIsActive() {
        return this.isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Boolean isIsLocked() {
        return this.isLocked;
    }

    public Boolean getIsLocked() {
        return this.isLocked;
    }

    public void setIsLocked(Boolean isLocked) {
        this.isLocked = isLocked;
    }

    public Personne getPersonne() {
        return this.personne;
    }

    public void setPersonne(Personne personne) {
        this.personne = personne;
    }

    @Override
    public String toString() {
        return "Compte [id=" + id + ", email=" + email + ", password=" + password + ", isActive=" + isActive
                + ", isLocked=" + isLocked + ", personne=" + personne + "]";
    }

    

}
