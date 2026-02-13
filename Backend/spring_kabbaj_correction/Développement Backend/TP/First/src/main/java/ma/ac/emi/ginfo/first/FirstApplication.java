package ma.ac.emi.ginfo.first;

import ma.ac.emi.ginfo.first.models.Student;
import ma.ac.emi.ginfo.first.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FirstApplication {

    @Autowired
    StudentRepository sr;

    public static void main(String[] args) {
        SpringApplication.run(FirstApplication.class, args);
    }

    @Bean
    public CommandLineRunner hey() {
        return (args) -> {
            Student s1 = new Student("1", "Anas", "Fajoui", 4);
            Student s2 = new Student("2", "Anas2", "Fajoui2", 42);

            System.out.println("Mfs: " + sr.findAll());

            sr.save(s1);
            sr.save(s2);

            System.out.println("Mf 1: " + sr.findById("1"));

            System.out.println("Mf with 4: " + sr.findByNiveau(4));
        };
    }

    public void show() {
        System.out.println("test");
    }
}
