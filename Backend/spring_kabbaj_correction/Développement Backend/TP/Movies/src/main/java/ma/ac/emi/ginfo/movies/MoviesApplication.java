package ma.ac.emi.ginfo.movies;

import ma.ac.emi.ginfo.movies.entities.Film;
import ma.ac.emi.ginfo.movies.repositories.FilmRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MoviesApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoviesApplication.class, args);
    }

    /*@Bean
    public CommandLineRunner commandLineRunner(FilmRepository fr) {
        return args -> {
            Film f = new Film("Harry Potter à l\'école des sorciers", "12 Septembre 2001", "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg", 90);
            fr.save(f);
            System.out.println(f);
            System.out.println(fr.findAll());
        };
    }*/

}
