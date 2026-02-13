package emi.revision.scrutin.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Preference extends Choix{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String intitulePreference;
    private String texteCommentairePref;


    public Preference() {
    }


    public Preference(Integer nbBulletinPour, Integer nbBulletinContre, String intitulePreference,
            String texteCommentairePref) {
        super(nbBulletinPour, nbBulletinContre);
        this.intitulePreference = intitulePreference;
        this.texteCommentairePref = texteCommentairePref;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntitulePreference() {
        return this.intitulePreference;
    }

    public void setIntitulePreference(String intitulePreference) {
        this.intitulePreference = intitulePreference;
    }

    public String getTexteCommentairePref() {
        return this.texteCommentairePref;
    }

    public void setTexteCommentairePref(String texteCommentairePref) {
        this.texteCommentairePref = texteCommentairePref;
    }


    @Override
    public String toString() {
        return "Preference [id=" + id + ", intitulePreference=" + intitulePreference + ", texteCommentairePref="
                + texteCommentairePref + ", toString()=" + super.toString() + "]";
    }

}
