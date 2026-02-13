package emi.revision.dossier_medical.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OperationAnalyse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private LocalDateTime dateheurOperation;
    private String result;


    public OperationAnalyse() {
    }


    public OperationAnalyse(String description, LocalDateTime dateheurOperation, String result) {
        this.description = description;
        this.dateheurOperation = dateheurOperation;
        this.result = result;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDateheurOperation() {
        return this.dateheurOperation;
    }

    public void setDateheurOperation(LocalDateTime dateheurOperation) {
        this.dateheurOperation = dateheurOperation;
    }

    public String getResult() {
        return this.result;
    }

    public void setResult(String result) {
        this.result = result;
    }


}
