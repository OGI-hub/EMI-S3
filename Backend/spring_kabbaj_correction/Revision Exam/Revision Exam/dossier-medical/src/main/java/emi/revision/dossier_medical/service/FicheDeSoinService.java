package emi.revision.dossier_medical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.dossier_medical.model.FicheDeSoin;
import emi.revision.dossier_medical.repositories.FicheDeSoinRepo;

@Service
public class FicheDeSoinService {
    @Autowired
    private FicheDeSoinRepo ficheDeSoinRepo;

    public List<FicheDeSoin> getAllFiches() {
        return this.ficheDeSoinRepo.findAll();
    }

    public FicheDeSoin getFicheDeSoinById(Long numeroFiche) {
        return this.ficheDeSoinRepo.findById(numeroFiche).orElse(null);
    }

    public FicheDeSoin newFicheDeSoin(FicheDeSoin fiche, List<Long> idFichePayee) {
        if(fiche == null)
            return null;
        List<FicheDeSoin> fichePayee = idFichePayee.stream().map(id -> this.ficheDeSoinRepo.findById(id).orElse(null)).toList();

        fiche.setFichesPayees(fichePayee);
        return this.ficheDeSoinRepo.save(fiche);
    }

    public FicheDeSoin updateFicheDeSoin(FicheDeSoin fiche, Long id){
        FicheDeSoin f = this.ficheDeSoinRepo.findById(id).orElse(null);
        if(f == null)
            return this.ficheDeSoinRepo.save(fiche);

        f.setAdresseCreateur(fiche.getAdresseCreateur());
        f.setAgentCreateur(fiche.getAgentCreateur());
        f.setDateCreation(fiche.getDateCreation());
        f.setFichesPayees(fiche.getFichesPayees());

        return this.ficheDeSoinRepo.save(f);
    }

    public void deleteFicheDeSoinById(Long id) {
        this.ficheDeSoinRepo.deleteById(id);
    }
}
