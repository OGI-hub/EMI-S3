package ma.ac.emi.ginfo.restfull.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Livre {
    @Id
    @Column(length = 20)
    private String cote;
    @Column(length = 50)
    private String titre;
    private String auteurs;
    @Column(length = 12, unique = true)
    private String isbn;

    @OneToOne(mappedBy = "livre")
    private Pret pret;

    public Livre() {
    }

    public Livre(String cote, String titre, String isbn) {
        this.cote = cote;
        this.titre = titre;
        this.isbn = isbn;
    }

    public Livre(String cote, String titre, String auteurs, String isbn) {
        this.cote = cote;
        this.titre = titre;
        this.auteurs = auteurs;
        this.isbn = isbn;
    }

    public String getCote() {
        return cote;
    }

    public void setCote(String cote) {
        this.cote = cote;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteurs() {
        return auteurs;
    }

    public void setAuteurs(String auteurs) {
        this.auteurs = auteurs;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Pret getPret() {
        return pret;
    }

    public void setPret(Pret pret) {
        this.pret = pret;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Livre livre = (Livre) o;
        return cote.equals(livre.cote);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cote);
    }


    @Override
    public String toString() {
        return "Livre{" +
                "cote='" + cote + '\'' +
                ", titre='" + titre + '\'' +
                ", auteurs='" + auteurs + '\'' +
                ", isbn='" + isbn + '\'' +
                ", en rayon=" + (pret==null) +
                '}';
    }
}
