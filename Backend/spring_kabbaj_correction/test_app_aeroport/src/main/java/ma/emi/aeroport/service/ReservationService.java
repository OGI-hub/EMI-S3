package ma.emi.aeroport.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.emi.aeroport.model.Reservation;
import ma.emi.aeroport.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository; // oublié le private

    public List<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    public Reservation getById(Long id) {
        return reservationRepository.findById(id).get(); // peut lancer exception
    }

    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }
}
