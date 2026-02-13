package com.example.facteurs.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@NoArgsConstructor
@Getter
@Setter
@Entity
public class CentreRegional extends  CentrePostal{
    @OneToMany
    private List<CentrePostal>  centrePostalList;

}
