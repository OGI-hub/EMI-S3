package ma.emi.ginf.gestion_notes.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ma.emi.ginf.gestion_notes.models.Matiere;
import ma.emi.ginf.gestion_notes.models.Note;
import ma.emi.ginf.gestion_notes.models.PK;
import ma.emi.ginf.gestion_notes.models.Student;



public interface NoteRepository extends JpaRepository<Note, PK>{

    @Query("select n from Note n where n.id.matiere = :m and n.id.student = :s")
    Note findByMatiereAndStudent(@Param("m") Matiere matiere, @Param("s") Student student);
    
    Note findByIdStudentAndIdMatiere(Student student, Matiere matiere);

    @Query("select n from Note n where n.id.student = :s")
    Page<Note> findByStudent(@Param("s") Student student,@Param("p") Pageable pageable);

    Page<Note> findByIdStudent(Student student,Pageable pageable);
    
}
