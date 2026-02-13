package emi.revision.dossier_medical.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class FicheConsultation extends FicheDeSoin{
    private String compteRendu;

    @OneToOne
    @JoinColumn(name = "consultaion", referencedColumnName = "id")
    private Consultaion origineFiche;
    @OneToMany
    @JoinColumn(name = "preinscription")
    private List<Preinscription> preinscriptions = new ArrayList<>();
    @OneToMany
    @JoinColumn(name = "analyses")
    private List<OperationAnalyse> analyses = new ArrayList<>();


    public FicheConsultation() {
    }


    public FicheConsultation(LocalDate dateCreation, String agentCreateur, String adresseCreateur, String compteRendu,
            Consultaion origineFiche, List<Preinscription> preinscriptions) {
        super(dateCreation, agentCreateur, adresseCreateur);
        this.compteRendu = compteRendu;
        this.origineFiche = origineFiche;
        this.preinscriptions = preinscriptions;
    }


    public FicheConsultation(LocalDate dateCreation, String agentCreateur, String adresseCreateur, String compteRendu,
            Consultaion origineFiche) {
        super(dateCreation, agentCreateur, adresseCreateur);
        this.compteRendu = compteRendu;
        this.origineFiche = origineFiche;
    }


    public String getCompteRendu() {
        return this.compteRendu;
    }

    public void setCompteRendu(String compteRendu) {
        this.compteRendu = compteRendu;
    }

    public Consultaion getOrigineFiche() {
        return this.origineFiche;
    }

    public void setOrigineFiche(Consultaion origineFiche) {
        this.origineFiche = origineFiche;
    }

    public List<Preinscription> getPreinscriptions() {
        return this.preinscriptions;
    }

    public void setPreinscriptions(List<Preinscription> preinscriptions) {
        this.preinscriptions = preinscriptions;
    }

    public List<OperationAnalyse> getAnalyses() {
        return this.analyses;
    }

    public void setAnalyses(List<OperationAnalyse> analyses) {
        this.analyses = analyses;
    }
    


}
