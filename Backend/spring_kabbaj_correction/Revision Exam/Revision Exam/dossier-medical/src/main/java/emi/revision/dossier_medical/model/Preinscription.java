package emi.revision.dossier_medical.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Preinscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String periode;
    private String indication;


    public Preinscription() {
    }


    public Preinscription(String description, String periode, String indication) {
        this.description = description;
        this.periode = periode;
        this.indication = indication;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPeriode() {
        return this.periode;
    }

    public void setPeriode(String periode) {
        this.periode = periode;
    }

    public String getIndication() {
        return this.indication;
    }

    public void setIndication(String indication) {
        this.indication = indication;
    }



}
