package ma.emi.aeroport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.emi.aeroport.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
