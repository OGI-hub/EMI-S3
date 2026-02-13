package emi.revision.mediatheque.model;

import jakarta.persistence.Entity;

@Entity
public class Livre extends Document {
    private Integer nombrePage;
    private final Integer DUREE = 367;
    private final Double TARIF = 0.5;


    public Livre() {
    }


    public Livre(String code, String titre, String auteur, String année, Boolean empruntable, Boolean emprunte,
            Integer nbEmprunt, Localisation localisation, Genre genre, Integer nombrePage) {
        super(code, titre, auteur, année, empruntable, emprunte, nbEmprunt, localisation, genre);
        this.nombrePage = nombrePage;
    }


    public Integer getNombrePage() {
        return nombrePage;
    }


    public void setNombrePage(Integer nombrePage) {
        this.nombrePage = nombrePage;
    }


    public Integer getDuree() {
        return DUREE;
    }


    public Double getTarif() {
        return TARIF;
    }


    @Override
    public String toString() {
        return "Livre [nombrePage=" + nombrePage + ", DUREE=" + DUREE + ", TARIF=" + TARIF + ", toString()="
                + super.toString() + "]";
    }

    


}
