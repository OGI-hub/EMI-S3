package ma.emi.aeroport.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ma.emi.aeroport.model.Reservation;
import ma.emi.aeroport.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }

    public Reservation findById(Long id) {
        return reservationRepository.findById(id).orElse(null);
    }

    public Reservation save(Reservation r) {
        return reservationRepository.save(r);
    }

    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }
}
