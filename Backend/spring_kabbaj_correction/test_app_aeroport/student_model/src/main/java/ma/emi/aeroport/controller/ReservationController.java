package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Reservation;
import ma.emi.aeroport.service.ReservationService;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> list() {
        return reservationService.findAll();
    }

    @GetMapping("/{id}")
    public Reservation get(@PathVariable Long id) {
        return reservationService.findById(id);
    }

    @PostMapping
    public Reservation create(@RequestBody Reservation reservation) {
        return reservationService.save(reservation);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id) {
        reservationService.delete(id);
    }
}
