package ma.ac.emi.ginfo.firstproject.models;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
public class CD extends Document{
    @NonNull
    private int taille;

    public CD(@NonNull int cote, @NonNull String titre, @NonNull int taille) {
        super(cote, titre);
        this.taille = taille;
    }
}
