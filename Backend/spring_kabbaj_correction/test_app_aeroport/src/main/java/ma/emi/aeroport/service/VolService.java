package ma.emi.aeroport.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.emi.aeroport.model.Vol;
import ma.emi.aeroport.repository.VolRepository;

@Service
public class VolService {

    @Autowired
    private VolRepository volRepository;

    // recuprer tous les vols
    public List<Vol> getAllVols() {
        return volRepository.findAll();
    }

    public Vol getVolById(Long id) {
        return volRepository.findById(id).orElse(null);
    }

    public Vol saveVol(Vol vol) {
        return volRepository.save(vol);
    }

    public Vol updateVol(Long id, Vol vol) {
        Vol existingVol = volRepository.findById(id).orElse(null);
        if (existingVol != null) {
            existingVol.setNumVol(vol.getNumVol());
            existingVol.setJourDepart(vol.getJourDepart());
            existingVol.setHeureDepart(vol.getHeureDepart());
            existingVol.setJourArrive(vol.getJourArrive());
            existingVol.setHeureArrive(vol.getHeureArrive());
            // System.out.println("updating vol: " + existingVol);
            return volRepository.save(existingVol);
        }
        return null;
    }

    public void deleteVol(Long id) {
        volRepository.deleteById(id);
    }

    public List<Vol> getVolsByCompagnie(Long compagnieId) {
        return volRepository.findByCompagnieId(compagnieId);
    }
}
