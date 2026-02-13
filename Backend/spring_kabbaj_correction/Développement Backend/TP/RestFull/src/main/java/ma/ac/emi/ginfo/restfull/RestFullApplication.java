package ma.ac.emi.ginfo.restfull;

import ma.ac.emi.ginfo.restfull.entities.Adhrent;
import ma.ac.emi.ginfo.restfull.entities.Livre;
import ma.ac.emi.ginfo.restfull.entities.Pret;
import ma.ac.emi.ginfo.restfull.repositories.AdhrentRepository;
import ma.ac.emi.ginfo.restfull.repositories.LivreRepository;
import ma.ac.emi.ginfo.restfull.repositories.PretRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class RestFullApplication {

    LivreRepository lr;
    AdhrentRepository ar;
    PretRepository pr;

    public RestFullApplication(LivreRepository lr, AdhrentRepository ar, PretRepository pr) {
        this.lr = lr;
        this.ar = ar;
        this.pr = pr;
    }

    public static void main(String[] args) {
        SpringApplication.run(RestFullApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(){
        return args -> {
            Livre l = new Livre("1234DELa", "Programmer en Java", "12345");
            Adhrent a = new Adhrent("kabbaj", "kabbaj@emi.ac.ma");
            lr.save(l);
            ar.save(a);
            Pret p = new Pret(l,a, LocalDate.now());
            l.setPret(p);
            a.add(p);
            pr.save(p);
            System.out.println(lr.findAll());
            System.out.println(ar.findAll());
            System.out.println(pr.findAll());
        };
    }

}
