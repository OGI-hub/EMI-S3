package ma.emi.ginf.gestion_notes.models;

public enum GradeType {

    PA("Professeur Assistant"),
    PH("Professeur Habilité"),
    PES("Profeeseur d'Enseignement Supérieur");

    private String description;

    public String getDescription() {
        return description;
    }

    private GradeType(String description) {
        this.description = description;
    }

    
}
