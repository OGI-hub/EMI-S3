package emi.revision.aeroport;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import emi.revision.aeroport.models.Aeroport;
import emi.revision.aeroport.models.Client;
import emi.revision.aeroport.models.Compagnie;
import emi.revision.aeroport.models.Escale;
import emi.revision.aeroport.models.Passager;
import emi.revision.aeroport.models.Personne;
import emi.revision.aeroport.models.Reservation;
import emi.revision.aeroport.models.Ville;
import emi.revision.aeroport.models.Vol;
import emi.revision.aeroport.repo.AeroportRepo;
import emi.revision.aeroport.repo.CompagnieRepo;
import emi.revision.aeroport.repo.EscaleRepo;
import emi.revision.aeroport.repo.PersonneRepo;
import emi.revision.aeroport.repo.ReservationRepo;
import emi.revision.aeroport.repo.VilleRepo;
import emi.revision.aeroport.repo.VolRepo;

@SpringBootApplication
public class AeroportApplication {
	@Autowired
	private PersonneRepo personneRepo;
	@Autowired
	private ReservationRepo reservationRepo;
	@Autowired
	private CompagnieRepo compagnieRepo;
	@Autowired
	private EscaleRepo escaleRepo;
	@Autowired
	private VilleRepo villeRepo;
	@Autowired
	private VolRepo volRepo;
	@Autowired
	private AeroportRepo aeroportRepo;


	public static void main(String[] args) {
		SpringApplication.run(AeroportApplication.class, args);
	}

	@Bean
	CommandLineRunner test() {
		return args -> {
			Client c1 = new Client("EL BOUR",  new ArrayList<Reservation>());
			Passager p1 = new Passager("EL BOUR",  new ArrayList<Reservation>());

			personneRepo.save(c1);
			personneRepo.save(p1);

			Compagnie comp1 = new Compagnie("Royal Air Maroc");
			this.compagnieRepo.save(comp1);

			Aeroport a1 = new Aeroport("Aeroport de Rabat");
			Aeroport a2 = new Aeroport("Aeroport de Casa");
			Aeroport a3 = new Aeroport("Aeroport de escale");
			this.aeroportRepo.saveAll(List.of(a1, a2, a3));


			Vol v1 = new Vol(LocalDate.now(), LocalTime.of(12, 0), LocalDate.now().plusDays(3), LocalTime.of(12, 0), a1, a2, comp1);
			this.volRepo.save(v1);

			Escale es1 = new Escale(v1, a3, LocalTime.now(), LocalTime.now().plusHours(3));
			this.escaleRepo.save(es1);

			Ville ville1 = new Ville("Rabat");
			ville1.setAeroport(List.of(a1));
			this.villeRepo.save(ville1);

			a1.setVilles(List.of(ville1));
			this.aeroportRepo.save(a1);


			Reservation reservation1 = new Reservation(LocalDate.now(), c1, p1);
			reservationRepo.save(reservation1);

			this.personneRepo.findAll().forEach(System.out :: println);
			this.personneRepo.findAll().stream().map(Personne :: getNom).forEach(System.out :: println);



		};
	}

}
