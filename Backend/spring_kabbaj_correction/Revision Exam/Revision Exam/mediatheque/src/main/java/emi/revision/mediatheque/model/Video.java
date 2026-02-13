package emi.revision.mediatheque.model;

import jakarta.persistence.Entity;

@Entity
public class Video extends Document{
    private Integer dureeFilm;
    private String mentionLegale ;
    private final Integer DUREE = 127;
    private final Double TARIF = 1.5;
    
    public Video() {
    }

    public Video(String code, String titre, String auteur, String année, Boolean empruntable, Boolean emprunte,
            Integer nbEmprunt, Localisation localisation, Genre genre, Integer dureeFilm, String mentionLegale) {
        super(code, titre, auteur, année, empruntable, emprunte, nbEmprunt, localisation, genre);
        this.dureeFilm = dureeFilm;
        this.mentionLegale = mentionLegale;
    }
    

    public Integer getDureeFilm() {
        return this.dureeFilm;
    }

    public void setDureeFilm(Integer dureeFilm) {
        this.dureeFilm = dureeFilm;
    }

    public String getMentionLegale() {
        return this.mentionLegale;
    }

    public void setMentionLegale(String mentionLegale) {
        this.mentionLegale = mentionLegale;
    }

    public Integer getDuree() {
        return this.DUREE;
    }

    public Double getTarif() {
        return this.TARIF;
    }

    @Override
    public String toString() {
        return "Video [dureeFilm=" + dureeFilm + ", mentionLegale=" + mentionLegale + ", DUREE=" + DUREE + ", TARIF="
                + TARIF + ", toString()=" + super.toString() + "]";
    }
    
}
