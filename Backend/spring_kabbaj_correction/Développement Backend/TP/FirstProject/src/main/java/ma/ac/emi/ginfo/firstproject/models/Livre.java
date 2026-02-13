package ma.ac.emi.ginfo.firstproject.models;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "Livres")
public class Livre extends Document implements Serializable {

    @NonNull
    //@Id
    //@Column(name = "id")
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String isbn;
    private String auteur;
    @Transient
    private Pret pret;

    public Livre(@NonNull int cote, @NonNull String titre, @NonNull String isbn) {
        super(cote, titre);
        this.isbn = isbn;
    }

    public Livre(@NonNull int cote, @NonNull String titre, @NonNull String isbn, String auteur) {
        super(cote, titre);
        this.isbn = isbn;
        this.auteur = auteur;
    }


    @Override
    public String toString() {
        return "Livre{" +
                "isbn='" + isbn + '\'' +
                ", auteur='" + auteur + '\'' +
                '}';
    }
}
