package emi.revision.dossier_medical;

import java.time.LocalDate;
import java.util.List;

// import java.time.LocalDate;
// import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import emi.revision.dossier_medical.model.DossierMedical;
import emi.revision.dossier_medical.model.FicheDeSoin;
import emi.revision.dossier_medical.model.Patient;
// import emi.revision.dossier_medical.model.Consultaion;
// import emi.revision.dossier_medical.model.OperationAnalyse;
// import emi.revision.dossier_medical.repositories.ConsultationRepo;
import emi.revision.dossier_medical.repositories.DossierMedicalRepo;
// import emi.revision.dossier_medical.repositories.FicheConsultationRepo;
import emi.revision.dossier_medical.repositories.FicheDeSoinRepo;
// import emi.revision.dossier_medical.repositories.FichePayementRepo;
// import emi.revision.dossier_medical.repositories.OperationAnalyseRepo;
import emi.revision.dossier_medical.repositories.PatientRepo;
// import emi.revision.dossier_medical.repositories.PreinscriptionRepo;

@SpringBootApplication
public class DossierMedicalApplication {
	// @Autowired
	// private ConsultationRepo consultationRepo;
	@Autowired
	private DossierMedicalRepo dossierMedicalRepo;
	// @Autowired
	// private FicheConsultationRepo ficheConsultationRepo;
	@Autowired
	private FicheDeSoinRepo ficheDeSoinRepo;
	// @Autowired
	// private FichePayementRepo fichePayementRepo;
	// @Autowired
	// private OperationAnalyseRepo operationAnalyse;
	@Autowired
	private PatientRepo patientRepo;
	// @Autowired
	// private PreinscriptionRepo preinscriptionRepo;

	public static void main(String[] args) {
		SpringApplication.run(DossierMedicalApplication.class, args);
	}

	@Bean
	CommandLineRunner coucou() {
		return args -> {
			FicheDeSoin fiche1 = new FicheDeSoin(LocalDate.now(), "MOI", "EMI");
			FicheDeSoin fiche2 = new FicheDeSoin(LocalDate.now(), "LUI", "ENIM");
			this.ficheDeSoinRepo.save(fiche2);
			this.ficheDeSoinRepo.save(fiche1);
			fiche1.setFichesPayees(List.of(fiche2));
			this.ficheDeSoinRepo.save(fiche1);

			DossierMedical dossier = new DossierMedical(LocalDate.now(), "1234", List.of(fiche1, fiche2));
			System.out.println(this.dossierMedicalRepo.save(dossier));

			Patient p = new Patient("AE310134", "EL BOUR", "Othmane", LocalDate.of(2003, 4, 3), 'm', "Sale", 650794360);
			p.setDossier(dossier);
			this.patientRepo.save(p);


		};
	}

}
