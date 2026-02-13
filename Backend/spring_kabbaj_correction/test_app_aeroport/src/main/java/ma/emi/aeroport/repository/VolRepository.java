package ma.emi.aeroport.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.emi.aeroport.model.Vol;

public interface VolRepository extends JpaRepository<Vol, Long> {

    List<Vol> findByNumVol(String numVol);

    // trouver les vols par compagnie
    List<Vol> findByCompagnieId(Long compagnieId);
}
