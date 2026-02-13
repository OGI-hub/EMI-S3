package emi.revision.scrutin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.scrutin.models.ScrutinPreferences;

public interface ScrutinPreferenceRepo extends JpaRepository<ScrutinPreferences, Long>{

}
