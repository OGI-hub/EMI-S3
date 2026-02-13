package emi.revision.scrutin.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Bulletin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean pourOuContre;
    @ManyToOne
    private Personne personne;
    @ManyToOne
    private Choix choix;
    @ManyToOne
    private Scrutin scrutin;


    public Bulletin() {
    }


    public Bulletin(Boolean pourOuContre, Personne personne, Choix choix, Scrutin scrutin) {
        this.pourOuContre = pourOuContre;
        this.personne = personne;
        this.choix = choix;
        this.scrutin = scrutin;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isPourOuContre() {
        return this.pourOuContre;
    }

    public Boolean getPourOuContre() {
        return this.pourOuContre;
    }

    public void setPourOuContre(Boolean pourOuContre) {
        this.pourOuContre = pourOuContre;
    }

    public Personne getPersonne() {
        return this.personne;
    }

    public void setPersonne(Personne personne) {
        this.personne = personne;
    }

    public Choix getChoix() {
        return this.choix;
    }

    public void setChoix(Choix choix) {
        this.choix = choix;
    }

    public Scrutin getScrutin() {
        return this.scrutin;
    }

    public void setScrutin(Scrutin scrutin) {
        this.scrutin = scrutin;
    }


    @Override
    public String toString() {
        return "Bulletin [id=" + id + ", pourOuContre=" + pourOuContre + ", personne=" + personne + ", choix=" + choix
                + ", scrutin=" + scrutin + "]";
    }

}
