package ma.ac.emi.ginfo.movies.repositories;

import ma.ac.emi.ginfo.movies.entities.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Long> {
}
