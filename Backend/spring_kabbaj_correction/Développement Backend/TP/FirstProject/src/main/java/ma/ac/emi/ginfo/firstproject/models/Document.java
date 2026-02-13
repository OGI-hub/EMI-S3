package ma.ac.emi.ginfo.firstproject.models;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@ToString
@EqualsAndHashCode(of = "cote")
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Document implements Comparable<Document> {
    @Id
    @NonNull
    private int cote;
    @NonNull
    private String titre;
    private boolean enRayon = true;

    //@Transient
    //private Pret pret;

    public Document(@NonNull int cote, @NonNull String titre) {
        this.cote = cote;
        this.titre = titre;
    }

    @Override
    public int compareTo(Document o) {
        return cote-o.getCote();
    }
}
