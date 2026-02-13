package ma.emi.ginf.gestion_notes.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Matiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private Integer volumeHoraire;
    private Integer semestre;
    @OneToMany(mappedBy = "id.matiere", fetch = FetchType.EAGER)
    @JsonBackReference
    private List<Note> notes;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "prof_matiere", joinColumns = @JoinColumn(name="matiere_id"), inverseJoinColumns = @JoinColumn(name = "prof_id"))
    private Set<Professeur> professeurs = new HashSet<>();


    public Matiere() {
    }

    public Matiere(String nom, Integer volumeHoraire, Integer semestre, List<Note> notes, Set<Professeur> professeurs) {
        this.nom = nom;
        this.volumeHoraire = volumeHoraire;
        this.semestre = semestre;
        this.notes = notes;
        this.professeurs = professeurs;
    }

    

    public Matiere(String nom, Integer volumeHoraire, Integer semestre, Set<Professeur> professeurs) {
        this.nom = nom;
        this.volumeHoraire = volumeHoraire;
        this.semestre = semestre;
        this.professeurs = professeurs;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getVolumeHoraire() {
        return this.volumeHoraire;
    }

    public void setVolumeHoraire(Integer volumeHoraire) {
        this.volumeHoraire = volumeHoraire;
    }

    public Integer getSemestre() {
        return this.semestre;
    }

    public void setSemestre(Integer semestre) {
        this.semestre = semestre;
    }

    public List<Note> getNotes() {
        return this.notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    public Set<Professeur> getProfesseurs() {
        return this.professeurs;
    }

    public void setProfesseurs(Set<Professeur> professeurs) {
        this.professeurs = professeurs;
    }

    @Override
    public String toString() {
        return "Matiere [id=" + id + ", nom=" + nom + ", volumeHoraire=" + volumeHoraire + ", semestre=" + semestre
                + ", professeurs=" + professeurs + "]";
    }

    
    

    
    

    


}
