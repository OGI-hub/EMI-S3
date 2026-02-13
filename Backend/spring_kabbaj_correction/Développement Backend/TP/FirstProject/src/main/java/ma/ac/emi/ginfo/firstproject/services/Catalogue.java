package ma.ac.emi.ginfo.firstproject.services;

import ma.ac.emi.ginfo.firstproject.models.Adherent;
import ma.ac.emi.ginfo.firstproject.models.Document;
import ma.ac.emi.ginfo.firstproject.models.Livre;
import ma.ac.emi.ginfo.firstproject.models.Pret;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class Catalogue {
    private static final List<Document> documents = new ArrayList<>();

    public static List<Document> chercherDocument(String titre){
        return documents.stream()
                .filter(d->d.getTitre().equals(titre))
                .collect(Collectors.toList());
    }
    public static Optional<Document> chercherDocument(int cote){
        return documents.stream()
                .filter(d->d.getCote()==cote)
                .findAny();
    }

    public static void seed(){
        documents.add(new Livre(123,"Programmer en Java","Claud","123"));
        documents.add(new Livre(123,"JAVA Programmer","Delanoy","1235"));
        documents.add(new Livre(345,"C","Delanoy","345"));
        documents.add(new Livre(234,"Intro BD","Delanoy","234"));
    }
}
