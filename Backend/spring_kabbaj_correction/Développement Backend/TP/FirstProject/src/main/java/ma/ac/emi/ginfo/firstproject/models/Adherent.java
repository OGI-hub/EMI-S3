package ma.ac.emi.ginfo.firstproject.models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.function.Consumer;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@Entity
public class Adherent implements Comparable<Adherent>{
    @Id
    @NonNull
    private int matricule;
    @NonNull
    private String nom;
    @NonNull
    private String mail;
    @OneToMany(mappedBy = "ad")
    private Set<Pret> prets = new TreeSet<>();

    public int size() {
        return prets.size();
    }

    public boolean add(Pret pret) {
        return prets.add(pret);
    }

    public boolean remove(Object o) {
        return prets.remove(o);
    }

    public void forEach(Consumer<? super Pret> action) {
        prets.forEach(action);
    }

    @Override
    public int compareTo(Adherent o) {
        return matricule-o.getMatricule();
    }


    @Override
    public String toString() {
        return "Adherent{" +
                "matricule=" + matricule +
                ", nom='" + nom + '\'' +
                ", mail='" + mail + '\'' +
                '}';
    }
}
