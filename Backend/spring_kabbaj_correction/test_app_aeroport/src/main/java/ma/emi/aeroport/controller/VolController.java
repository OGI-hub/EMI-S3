package ma.emi.aeroport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ma.emi.aeroport.model.Vol;
import ma.emi.aeroport.service.VolService;

@RestController
@RequestMapping("/api/vols")
public class VolController {

    @Autowired
    private VolService volService;

    @GetMapping
    public List<Vol> getAll() {
        return volService.getAllVols();
    }

    @GetMapping("/{id}")
    public Vol getById(@PathVariable Long id) {
        return volService.getVolById(id);
    }

    @PostMapping
    public Vol create(@RequestBody Vol vol) {
        return volService.saveVol(vol);
    }

    @PutMapping("/{id}")
    public Vol update(@PathVariable Long id, @RequestBody Vol vol) {
        return volService.updateVol(id, vol);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        volService.deleteVol(id);
    }

    // vols par compagnie
    @GetMapping("/compagnie/{compagnieId}")
    public List<Vol> getByCompagnie(@PathVariable Long compagnieId) {
        return volService.getVolsByCompagnie(compagnieId);
    }
}
