package emi.revision.mediatheque;

import java.time.LocalDate;

// import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import emi.revision.mediatheque.model.Client;
import emi.revision.mediatheque.model.FicheEmprunt;
import emi.revision.mediatheque.model.Genre;
import emi.revision.mediatheque.model.Livre;
import emi.revision.mediatheque.model.Localisation;
import emi.revision.mediatheque.repositories.ClientRepo;
import emi.revision.mediatheque.repositories.FicheEmpruntRepo;
import emi.revision.mediatheque.repositories.GenreRepo;
import emi.revision.mediatheque.repositories.LivreRepo;
import emi.revision.mediatheque.repositories.LocalisationRepo;

// import emi.revision.mediatheque.model.CategorieClient;
// import emi.revision.mediatheque.model.Client;
// import emi.revision.mediatheque.repositories.CategorieClientRepo;
// import emi.revision.mediatheque.repositories.ClientRepo;

@SpringBootApplication
public class MediathequeApplication {

	// @Autowired
	// private CategorieClientRepo categorieClientRepository;
	 @Autowired
	 private ClientRepo clientRepo;
	@Autowired
	private LivreRepo livreRepo;
	@Autowired
	private LocalisationRepo localisationRepo;
	@Autowired
	private GenreRepo genreRepo;
	@Autowired
	private FicheEmpruntRepo ficheEmpruntRepo;


	public static void main(String[] args) {
		SpringApplication.run(MediathequeApplication.class, args);
	}

	@Bean
	public CommandLineRunner coucou() {
		return args -> {
			// CategorieClient cat1 = new CategorieClient("Categorie 1", 0, 100.0);
			// categorieClientRepository.save(cat1);
			// Client c1 = new Client("EL BOUR", "Othmane", LocalDate.now(), null, 0, 0, 0, cat1);
			// clientrepo.save(c1);
			// clientrepo.findAll().forEach(System.out :: println);
			
			Localisation localisation = new Localisation("salle 1", "rayon 1");
			localisationRepo.save(localisation);
			Genre genre = new Genre("Romance", 0);
			this.genreRepo.save(genre);
			
			Livre document = new Livre("123", "titre", "auteur", "2025", false, false, 0, localisation, genre, 0);

			this.livreRepo.save(document);

			Client cl1 = new Client("EL BOUR", "Othmane", LocalDate.now(), null, 0, 0, 0, null);

			this.clientRepo.save(cl1);

			FicheEmprunt ficheEmprunt = new FicheEmprunt(document, cl1, LocalDate.now(), LocalDate.now().plusDays(5), LocalDate.now().plusDays(10));

			this.ficheEmpruntRepo.save(ficheEmprunt);



		};
	}	

}
