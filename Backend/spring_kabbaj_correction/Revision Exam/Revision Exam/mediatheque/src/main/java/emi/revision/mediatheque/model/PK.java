package emi.revision.mediatheque.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Embeddable
public class PK {
    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;
    @OneToOne
    @JoinColumn(name = "id_document")
    private Document document;


    public PK() {
    }


    public PK(Client client, Document document) {
        this.client = client;
        this.document = document;
    }

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Document getDocument() {
        return this.document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    @Override
    public String toString() {
        return "PK [client=" + client + ", document=" + document + "]";
    }

}
