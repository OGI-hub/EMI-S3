package ma.emi.aeroport.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ma.emi.aeroport.model.Vol;
import ma.emi.aeroport.service.VolService;

@RestController
@RequestMapping("/vols")
public class VolController {

    @Autowired
    private VolService volService;

    @GetMapping
    public List<Vol> getAll() {
        return volService.findAll();
    }

    @GetMapping("/{id}")
    public Vol getOne(@PathVariable Long id) {
        return volService.findById(id);
    }

    @PostMapping
    public Vol add(@RequestBody Vol vol) {
        return volService.save(vol);
    }

    @PutMapping("/{id}")
    public Vol update(@PathVariable Long id, @RequestBody Vol vol) {
        vol.setId(id);
        return volService.save(vol);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        volService.delete(id);
    }
}
