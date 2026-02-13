package emi.revision.mediatheque.model;


import jakarta.persistence.Entity;

@Entity
public class Audio extends Document {
    private String classification;
    private final Integer DUREE = 247;
    private final Double TARIF = 1.0;
    

    public Audio() {
        super();
    }


    public Audio(String code, String titre, String auteur, String année, Boolean empruntable, Boolean emprunte,Integer nbEmprunt, Localisation localisation, Genre genre, String classification) {
        super(code, titre, auteur, année, empruntable, emprunte, nbEmprunt, localisation, genre);
        this.classification = classification;
    }


    public String getClassification() {
        return this.classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public Integer getDuree() {
        return this.DUREE;
    }

   
    public Double getTarif() {
        return this.TARIF;
    }


    @Override
    public String toString() {
        return "Audio [classification=" + classification + ", DUREE=" + DUREE + ", TARIF=" + TARIF + ", toString()="
                + super.toString() + "]";
    }

    
   
    
}
