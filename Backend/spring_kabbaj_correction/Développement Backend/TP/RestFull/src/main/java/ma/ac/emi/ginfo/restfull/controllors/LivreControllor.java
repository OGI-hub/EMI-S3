package ma.ac.emi.ginfo.restfull.controllors;

import ma.ac.emi.ginfo.restfull.entities.Livre;
import ma.ac.emi.ginfo.restfull.services.PretService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LivreControllor {

    @Autowired
    PretService ps;

    @RequestMapping("/livres")
    public List<Livre> livres(){
        return ps.livres();
    }

    @GetMapping("/livres/{id}")
    public Livre livre(@PathVariable(name = "id") String cote){
       return ps.chercherLivre(cote).get();
    }
}
