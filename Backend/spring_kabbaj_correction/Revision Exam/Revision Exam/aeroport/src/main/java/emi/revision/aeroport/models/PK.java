package emi.revision.aeroport.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.ManyToOne;

@Embeddable
public class PK {
    @ManyToOne
    private Aeroport aeroport;
    @ManyToOne
    private Vol vol;


    public PK() {
    }

    public PK(Aeroport aeroport, Vol vol) {
        this.aeroport = aeroport;
        this.vol = vol;
    }


    public Aeroport getAeroport() {
        return this.aeroport;
    }

    public void setAeroport(Aeroport aeroport) {
        this.aeroport = aeroport;
    }

    public Vol getVol() {
        return this.vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    @Override
    public String toString() {
        return "PK [aeroport=" + aeroport + ", vol=" + vol + "]";
    }

    
}
