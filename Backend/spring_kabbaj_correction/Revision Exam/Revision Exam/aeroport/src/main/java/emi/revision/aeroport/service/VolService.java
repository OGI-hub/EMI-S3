package emi.revision.aeroport.service;

import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emi.revision.aeroport.models.Aeroport;
import emi.revision.aeroport.models.Escale;
import emi.revision.aeroport.models.Vol;
import emi.revision.aeroport.repo.AeroportRepo;
import emi.revision.aeroport.repo.EscaleRepo;
import emi.revision.aeroport.repo.VolRepo;

@Service
public class VolService {

    @Autowired
    private VolRepo volRepo;
    @Autowired
    private EscaleRepo escaleRepo;
    @Autowired
    private AeroportRepo aeroportRepo;

    public List<Vol> getAllVols() {
        return this.volRepo.findAll();
    }

    public Vol getVolById(Long id) {
        return volRepo.findById(id).orElse(null);
    }

    public Vol addVol(Vol Vol) {
        if (Vol != null) {
            return volRepo.save(Vol);
        }
        return null;
    }

    public Vol updateVol(Vol Vol) {
        if (Vol != null) {
            return volRepo.save(Vol);
        }
        return null;
    }

    public Vol updateVolHeure(Long id, LocalTime depart, LocalTime arrivee) {
        Vol v = this.volRepo.findById(id).orElse(null);
        if (v == null)
            return null;

        if (depart != null)
            v.setHeureDepart(depart);
        if (arrivee != null)
            v.setHeureArrivee(arrivee);
        return volRepo.save(v);
    }

    public Vol assignEscaleToVol(Escale escale, Long numVol) {
        Vol v = this.volRepo.findById(numVol).orElse(null);
        if (v == null) {
            return null;
        }
        v.add(escale);
        return this.volRepo.save(v);

    }

    public List<Vol> getAllEscales() {
        return this.volRepo.findAll();
    }

    public Escale getEscaleByIdVolAndIdAeroport(Long idVol, Long idAeroport) {
        Aeroport a = aeroportRepo.findById(idAeroport).orElse(null);
        Vol v = volRepo.findById(idVol).orElse(null);

        if (a == null || v == null) {
            return null;
        }

        return this.escaleRepo.findByIdVolAndIdAeroport(v, a).orElse(null);

    }

    public Escale addEscale(Escale Escale) {
        if (Escale != null) {
            return escaleRepo.save(Escale);
        }
        return null;
    }

}
