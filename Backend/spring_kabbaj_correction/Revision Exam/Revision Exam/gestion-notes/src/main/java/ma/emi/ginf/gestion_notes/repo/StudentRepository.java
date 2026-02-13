package ma.emi.ginf.gestion_notes.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.emi.ginf.gestion_notes.models.Student;
import java.util.List;


public interface StudentRepository extends JpaRepository<Student, Long>{
    List<Student> findByNom(String nom);
}
