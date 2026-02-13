package emi.revision.scrutin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import emi.revision.scrutin.models.Bulletin;

public interface BulletinRepo extends JpaRepository<Bulletin, Long>{

}
