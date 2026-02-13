package ma.emi.ginf.gestion_notes;

import java.time.LocalDate;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.PageRequest;

import ma.emi.ginf.gestion_notes.models.Compte;
import ma.emi.ginf.gestion_notes.models.GradeType;
import ma.emi.ginf.gestion_notes.models.Matiere;
import ma.emi.ginf.gestion_notes.models.Note;
import ma.emi.ginf.gestion_notes.models.Personne;
import ma.emi.ginf.gestion_notes.models.Professeur;
import ma.emi.ginf.gestion_notes.models.Student;
import ma.emi.ginf.gestion_notes.repo.CompteRepository;
import ma.emi.ginf.gestion_notes.repo.MatiereRepository;
import ma.emi.ginf.gestion_notes.repo.NoteRepository;
import ma.emi.ginf.gestion_notes.repo.PersonneRepository;
import ma.emi.ginf.gestion_notes.repo.ProfesseurRepository;
import ma.emi.ginf.gestion_notes.repo.StudentRepository;

@SpringBootApplication
public class GestionNotesApplication {
	@Autowired
	private PersonneRepository personneRepository;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private ProfesseurRepository professeurRepository;
	@Autowired
	private MatiereRepository matiereRepository;
	@Autowired
	private NoteRepository noteRepository;
	@Autowired
	private CompteRepository compteRepository;

	public static void main(String[] args) {
		SpringApplication.run(GestionNotesApplication.class, args);
	}

	@Bean
	public CommandLineRunner coucou() {
		return args -> {
			System.out.println("--------------------------------------DEBUT DU TEST--------------------------------------");
			
			Personne p1 = new Personne(123L, "EL BOUR", "Othmane", LocalDate.of(2003, 4, 3));
			personneRepository.save(p1);

			Student s1 = new Student(234L, "HSSAINI", "Zainab", LocalDate.of(2004, 1, 6), 2, false);
			studentRepository.save(s1);

			Student s2 = new Student(1234L, "EL BOUR", "Rania", LocalDate.of(2009, 12, 10), 1, false);
			studentRepository.save(s2);

			Professeur pr1 = new Professeur(345L, "KABBAJ", "Issam", LocalDate.of(1969, 10, 21), GradeType.PES, 1000);
			Professeur pr2 = new Professeur(456L, "BELOUADHA", "FZ", LocalDate.of(1969, 10, 21), GradeType.PES, 1000);
			Professeur pr3 = new Professeur(567L, "ANWAR", "Adil", LocalDate.of(1969, 10, 21), GradeType.PES, 1000);
			professeurRepository.save(pr1);
			professeurRepository.save(pr2);
			professeurRepository.save(pr3);


			System.out.println("Recovering Person");
			System.out.println(personneRepository.findAll());
			System.out.println(personneRepository.findByNom("EL BOUR"));
			
			System.out.println("Recovering Student");
			System.out.println(studentRepository.findAll());
			System.out.println(studentRepository.findByNom("HSSAINI"));

			System.out.println("Recovering Professeur");
			System.out.println(professeurRepository.findAll());
			System.out.println(professeurRepository.findByNom("KABBAJ"));
			professeurRepository.getProfesseurByNom("A", PageRequest.of(0, 5)).forEach(System.out :: println);

			Matiere m1 = new Matiere("Backend", 14, 3, Set.of(pr1));
			matiereRepository.save(m1);
			System.out.println(m1.getNotes());
			/*Note n1 = new Note(18.0, m1);
			noteRepository.save(n1);*/
			Matiere m2 = new Matiere("FrontEnd", 14, 3, Set.of(pr3));
			matiereRepository.save(m2);

			System.out.println(matiereRepository.findById(1L).get().getNotes());

			System.out.println("-----------GESTION DES COMPTES----------------");

			Compte c1 = new Compte("elbour.othmane@gmail.com", "admin", true, true, p1);
			compteRepository.save(c1);

			System.out.println(personneRepository.findById(123L).get().getCompte());

			
			System.out.println("-----------GESTION DES NOUVELLES NOTES----------------");

			Note n2 = new Note(18.0, "GOOD", m1, s1);
			noteRepository.save(n2);

			Note n3 = new Note(10.0, "NOT GOOD", m2, s1);
			noteRepository.save(n3);

			Note n4 = new Note(18.0, "GOOD", m1, s2);
			noteRepository.save(n4);

			System.out.println(noteRepository.findByMatiereAndStudent(m1, s1));
			System.out.println(noteRepository.findByIdStudentAndIdMatiere(s1, m1));

			System.out.println("-----------------------------------------------------------------------------");


			noteRepository.findByStudent(s1, PageRequest.of(0, 5)).forEach(System.out :: println);
			noteRepository.findByIdStudent(s1, PageRequest.of(0, 5)).forEach(System.out :: println);









			System.out.println("--------------------------------------FIN DU TEST--------------------------------------");
		};
	}
}
