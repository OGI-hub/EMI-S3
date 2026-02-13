package ma.ac.emi.ginfo.movies.entities;


import javax.persistence.*;

@Entity
@Table(name="films")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String titre;
    private String annee;
    private String image;
    private int duree;
    private int ranking;


    public Film() {
    }

    public Film(String titre, String annee, String image, int duree) {
        this.titre = titre;
        this.annee = annee;
        this.image = image;
        this.duree = duree;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAnnee() {
        return annee;
    }

    public void setAnnee(String annee) {
        this.annee = annee;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public int getRank() {
        return ranking;
    }

    public void setRank(int rank) {
        this.ranking = rank;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Film{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", annee='" + annee + '\'' +
                ", image='" + image + '\'' +
                ", duree=" + duree +
                ", rank=" + ranking +
                '}';
    }
}
