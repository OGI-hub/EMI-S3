package ma.ac.emi.ginfo.secondproject.repositories;

import ma.ac.emi.ginfo.secondproject.models.Student;
import ma.ac.emi.ginfo.secondproject.models.StudentDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByPrenom(String prenom);

    @Query("select s from Student s where s.prenom = 'Anas'")
    Student findAnas();

    @Query("select s.nom, s.prenom from Student s where s.prenom = :prenom")
    List<List<String>> findNomAndPrenomByPrenom(String prenom);
}
