package ma.ac.emi.ginfo.firstproject.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@NoArgsConstructor
@Getter
@ToString
@Entity
public class Pret implements Comparable<Pret>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NonNull
    private LocalDate datePret;
    @NonNull
    @ManyToOne
    private Document document;
    @NonNull
    @ManyToOne
    @JoinColumn(name = "mat")
    private Adherent ad;

    public Pret(@NonNull LocalDate datePret, @NonNull Document document, @NonNull Adherent adherent) {
        setDatePret(datePret);
        setDocument(document);
        setAdherent(adherent);
    }

    public void setDatePret(LocalDate datePret) {
        this.datePret = datePret;
    }

    public void setDocument(Document document) {
        this.document = document;
        document.setEnRayon(false);
    }

    public void setAdherent(Adherent adherent) {
        this.ad = adherent;
        adherent.add(this);
    }

    public int compareTo(Pret o) {
        return Math.abs(document.compareTo(o.getDocument()))
                + Math.abs(ad.compareTo(o.getAd()))
                + Math.abs(datePret.compareTo(o.getDatePret()));
    }
}
