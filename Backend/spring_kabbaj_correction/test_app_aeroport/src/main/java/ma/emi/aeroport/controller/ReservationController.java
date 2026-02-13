package ma.emi.aeroport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.emi.aeroport.model.Reservation;
import ma.emi.aeroport.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // lister toutes les reservations
    @GetMapping
    public List<Reservation> lister() {
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Reservation trouverParId(@PathVariable Long id) {
        return reservationService.getById(id);
    }

    @PostMapping
    public Reservation ajouter(@RequestBody Reservation reservation) {
        return reservationService.save(reservation);
    }

    // TODO: implementer update
    @PutMapping("/{id}")
    public Reservation modifier(@PathVariable Long id, @RequestBody Reservation reservation) {
        // juste sauvegarder pour le moment
        reservation.setId(id);
        return reservationService.save(reservation);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        reservationService.delete(id);
    }
}
