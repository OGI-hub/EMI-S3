package emi.revision.scrutin.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Choix {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer nbBulletinPour;
    private Integer nbBulletinContre;
    @OneToMany(mappedBy = "choix", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Bulletin> bulletins = new ArrayList<>();


    public Choix() {
    }


    public Choix(Integer nbBulletinPour, Integer nbBulletinContre) {
        this.nbBulletinPour = nbBulletinPour;
        this.nbBulletinContre = nbBulletinContre;
    }


    public boolean add(Bulletin arg0) {
        return bulletins.add(arg0);
    }


    public boolean contains(Object arg0) {
        return bulletins.contains(arg0);
    }


    public Bulletin get(int arg0) {
        return bulletins.get(arg0);
    }


    public boolean remove(Object arg0) {
        return bulletins.remove(arg0);
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNbBulletinPour() {
        return this.nbBulletinPour;
    }

    public void setNbBulletinPour(Integer nbBulletinPour) {
        this.nbBulletinPour = nbBulletinPour;
    }

    public Integer getNbBulletinContre() {
        return this.nbBulletinContre;
    }

    public void setNbBulletinContre(Integer nbBulletinContre) {
        this.nbBulletinContre = nbBulletinContre;
    }

    public List<Bulletin> getBulletins() {
        return this.bulletins;
    }

    public void setBulletins(List<Bulletin> bulletins) {
        this.bulletins = bulletins;
    }


    @Override
    public String toString() {
        return "Choix [id=" + id + ", nbBulletinPour=" + nbBulletinPour + ", nbBulletinContre=" + nbBulletinContre
                + "]";
    }
    

}
