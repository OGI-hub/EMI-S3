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

    public List<Vol> findAll() {
        return volRepository.findAll();
    }

    public Vol findById(Long id) {
        return volRepository.findById(id).orElse(null);
    }

    public Vol save(Vol vol) {
        return volRepository.save(vol);
    }

    public void delete(Long id) {
        volRepository.deleteById(id);
    }
}
