package ma.emi.ginf.gestion_notes.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Personne {
    @Id
    private Long matricule;
    @Column(nullable = false)
    private String nom;
    @Column(nullable = false)
    private String prenom;
    private LocalDate dateDeNaissance;
    @OneToOne
    @JoinColumn(name = "matricule", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonManagedReference
    private Compte compte;
    

    public Personne() {
    }


    public Personne(Long matricule, String nom, String prenom, LocalDate dateDeNaissance, Compte compte) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.compte = compte;
    }
    
    


    public Personne(Long matricule, String nom, String prenom, LocalDate dateDeNaissance) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
    }


    public Long getMatricule() {
        return this.matricule;
    }

    public void setMatricule(Long matricule) {
        this.matricule = matricule;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateDeNaissance() {
        return this.dateDeNaissance;
    }

    public void setDateDeNaissance(LocalDate dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }

    public Compte getCompte() {
        return this.compte;
    }

    public void setCompte(Compte compte) {
        this.compte = compte;
    }


    @Override
    public String toString() {
        return "Personne [matricule=" + matricule + ", nom=" + nom + ", prenom=" + prenom + ", dateDeNaissance="
                + dateDeNaissance;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((matricule == null) ? 0 : matricule.hashCode());
        return result;
    }


    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Personne other = (Personne) obj;
        if (matricule == null) {
            if (other.matricule != null)
                return false;
        } else if (!matricule.equals(other.matricule))
            return false;
        return true;
    }

    
    


}
