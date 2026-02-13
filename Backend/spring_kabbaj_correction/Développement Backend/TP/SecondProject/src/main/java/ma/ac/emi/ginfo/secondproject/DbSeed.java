package ma.ac.emi.ginfo.secondproject;

import ma.ac.emi.ginfo.secondproject.models.Student;
import ma.ac.emi.ginfo.secondproject.repositories.GroupeRepository;
import ma.ac.emi.ginfo.secondproject.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DbSeed {

    @Autowired
    private StudentRepository sr;
    @Autowired
    private GroupeRepository gr;

    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
            sr.save(new Student("Fajoui", "Anas", "anasfajoui@gmail.com", "4"));
            sr.save(new Student("Fajoui2", "Anas", "FAJOUIANAS@gmail.com", "2"));
            sr.save(new Student("Fajoui3", "Anas3", "FAJOUIANAS@gmail.com3", "3"));

//            System.out.println(sr.findByPrenom("Anas"));
//            System.out.println(sr.findAll());
//            System.out.println(sr.findById(2L));
//            System.out.println(sr.findAnas());
//            System.out.println(sr.findNomAndPrenomByPrenom("Anas"));
//            gr.save(new Group("A"));
//            Group a = gr.findAll().get(0);
//            a.add(sr.findByPrenom("Anas"));
//            gr.save(a);
        };
    }
}
