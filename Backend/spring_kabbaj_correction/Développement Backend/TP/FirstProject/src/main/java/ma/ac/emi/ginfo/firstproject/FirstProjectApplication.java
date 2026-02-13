package ma.ac.emi.ginfo.firstproject;

import ma.ac.emi.ginfo.firstproject.models.Adherent;
import ma.ac.emi.ginfo.firstproject.models.Pret;
import ma.ac.emi.ginfo.firstproject.services.Catalogue;
import ma.ac.emi.ginfo.firstproject.services.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Arrays;

@SpringBootApplication
public class FirstProjectApplication {

    @Autowired
    LivreRepository lr;

    public static void main(String[] args) {
        SpringApplication.run(FirstProjectApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ac){
        return args -> {

            /*System.out.println("Hello");

            Catalogue.seed();

            Adherent a1 = new Adherent(1, "Kabbaj", "kabbaj@emi.ac.ma");
            Adherent a2 = new Adherent(2, "Mohammed", "Mohammed@emi.ac.ma");
            Adherent a3 = new Adherent(3, "Issam", "Issam@emi.ac.ma");

            Pret p = new Pret(LocalDate.now(), Catalogue.chercherDocument(123).get(), a1);

            System.out.println(p);
            System.out.println(a1);
            System.out.println(Catalogue.chercherDocument(123).get().isEnRayon());
            System.out.println(a1.getPrets());

            //Arrays.stream(ac.getBeanDefinitionNames()).forEach(System.out::println);*/



        };
    }

}
