package emi.revision.mediatheque.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Document {
    @Id
    private String code;
    private String titre;
    private String auteur;
    private String année;
    private Boolean empruntable = false;
    private Boolean emprunte = false;
    private Integer nbEmprunt = 0;
    @ManyToOne
    private Localisation localisation;
    @ManyToOne
    private Genre genre;
    @OneToOne(mappedBy = "id.document", cascade = CascadeType.ALL)
    @JsonIgnore
    private FicheEmprunt ficheEmprunt;


    public Document() {
    }

    public Document(String code, String titre, String auteur, String année, Boolean empruntable, Boolean emprunte, Integer nbEmprunt, Localisation localisation, Genre genre) {
        this.code = code;
        this.titre = titre;
        this.auteur = auteur;
        this.année = année;
        this.empruntable = empruntable;
        this.emprunte = emprunte;
        this.nbEmprunt = nbEmprunt;
        this.localisation = localisation;
        this.genre = genre;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitre() {
        return this.titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return this.auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getAnnée() {
        return this.année;
    }

    public void setAnnée(String année) {
        this.année = année;
    }

    public Boolean isEmpruntable() {
        return this.empruntable;
    }

    public Boolean getEmpruntable() {
        return this.empruntable;
    }

    public void setEmpruntable(Boolean empruntable) {
        this.empruntable = empruntable;
    }

    public Boolean isEmprunte() {
        return this.emprunte;
    }

    public Boolean getEmprunte() {
        return this.emprunte;
    }

    public void setEmprunte(Boolean emprunte) {
        this.emprunte = emprunte;
    }

    public Integer getNbEmprunt() {
        return this.nbEmprunt;
    }

    public void setNbEmprunt(Integer nbEmprunt) {
        this.nbEmprunt = nbEmprunt;
    }

    public Localisation getLocalisation() {
        return this.localisation;
    }

    public void setLocalisation(Localisation localisation) {
        this.localisation = localisation;
    }

    public Genre getGenre() {
        return this.genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public FicheEmprunt getFicheEmprunt() {
        return this.ficheEmprunt;
    }

    public void setFicheEmprunt(FicheEmprunt ficheEmprunt) {
        this.ficheEmprunt = ficheEmprunt;
    }

    public abstract Double getTarif();


    

    @Override
    public String toString() {
        return "Document [code=" + code + ", titre=" + titre + ", auteur=" + auteur + ", année=" + année
                + ", empruntable=" + empruntable + ", emprunte=" + emprunte + ", nbEmprunt=" + nbEmprunt
                + ", localisation=" + localisation + ", genre=" + genre + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((code == null) ? 0 : code.hashCode());
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
        Document other = (Document) obj;
        if (code == null) {
            if (other.code != null)
                return false;
        } else if (!code.equals(other.code))
            return false;
        return true;
    }
    

    
    

    

}
