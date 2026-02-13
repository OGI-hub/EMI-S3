package emi.revision.scrutin;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import emi.revision.scrutin.models.Bulletin;
import emi.revision.scrutin.models.Choix;
import emi.revision.scrutin.models.Personne;
import emi.revision.scrutin.models.PlageHoraire;
import emi.revision.scrutin.models.Preference;
import emi.revision.scrutin.models.Scrutin;
import emi.revision.scrutin.models.ScrutinPlageHoraires;
import emi.revision.scrutin.models.ScrutinPreferences;
import emi.revision.scrutin.repositories.BulletinRepo;
import emi.revision.scrutin.repositories.ChoixRepo;
import emi.revision.scrutin.repositories.PersonneRepo;
import emi.revision.scrutin.repositories.PlageHoraireRepo;
import emi.revision.scrutin.repositories.PreferenceRepo;
import emi.revision.scrutin.repositories.ScrutinRepo;

@SpringBootApplication
public class ScrutinApplication {

	@Autowired
	private PersonneRepo personneRepo;
	@Autowired
	private ScrutinRepo scrutinRepo;
	@Autowired
	private ChoixRepo choixRepo;
	@Autowired
	private BulletinRepo bulletinRepo;
	@Autowired
	private PreferenceRepo preferenceRepo;
	@Autowired
	private PlageHoraireRepo plageHoraireRepo;
	

	public static void main(String[] args) {
		SpringApplication.run(ScrutinApplication.class, args);
	}

	@Bean
	CommandLineRunner coucou() {
		return args -> {
			Personne p1 = new Personne(3, 2, "Othmane", "EL BOUR");
			this.personneRepo.save(p1);

			Scrutin s1 = new Scrutin("Scrutin 1", "COMMENTAIIIRE", LocalDate.now(), LocalDate.now().plusDays(3), LocalDate.now().plusDays(3), true, false, false, p1);
			this.scrutinRepo.save(s1);

			Choix c1 = new Choix(3, 5);
			this.choixRepo.save(c1);

			Bulletin b1 = new Bulletin(true, p1, c1, s1);
			this.bulletinRepo.save(b1);

			Preference pref1 = new Preference(3, 5, "Preference 1", "Commentaire");
			this.preferenceRepo.save(pref1);

			PlageHoraire plage1 = new PlageHoraire(3, 5, LocalDate.now(), LocalTime.now(), LocalTime.now().plusHours(6));
			this.plageHoraireRepo.save(plage1);

			ScrutinPlageHoraires sp = new ScrutinPlageHoraires("ScrutinPlageHoraire", "COMMENTAIIIRE", LocalDate.now(), LocalDate.now().plusDays(3), LocalDate.now().plusDays(3), true, false, false, p1);

			ScrutinPreferences sf = new ScrutinPreferences("ScrutinPlageHoraire", "COMMENTAIIIRE", LocalDate.now(), LocalDate.now().plusDays(3), LocalDate.now().plusDays(3), true, false, false, p1);

			this.scrutinRepo.saveAll(List.of(sp, sf));


		};
	}



}
