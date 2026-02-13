package ma.ac.emi.ginfo.first.repositories;

import ma.ac.emi.ginfo.first.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, String> {
    List<Student> findByNiveau(int s);
}
