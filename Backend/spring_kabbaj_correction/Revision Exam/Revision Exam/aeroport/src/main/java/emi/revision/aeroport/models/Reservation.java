package emi.revision.aeroport.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "client")
    private Client client;
    @ManyToOne
    @JoinColumn(name = "passager")
    private Passager passager;
    @ManyToOne
    @JoinColumn(name = "vol")
    private Vol vol;


    public Reservation() {
    }

    
    public Reservation(LocalDate date, Client client, Passager passager, Vol vol) {
        this.date = date;
        this.client = client;
        this.passager = passager;
        this.vol = vol;
    }


    public Reservation(LocalDate date, Client client, Passager passager) {
        this.date = date;
        this.client = client;
        this.passager = passager;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public LocalDate getDate() {
        return date;
    }


    public void setDate(LocalDate date) {
        this.date = date;
    }


    public Client getClient() {
        return client;
    }


    public void setClient(Client client) {
        this.client = client;
    }

    public Passager getPassager() {
        return this.passager;
    }

    public void setPassager(Passager passager) {
        this.passager = passager;
    }


    @Override
    public String toString() {
        return "Reservation [id=" + id + ", date=" + date + ", client=" + client + ", passager=" + passager + "]";
    }






    }
