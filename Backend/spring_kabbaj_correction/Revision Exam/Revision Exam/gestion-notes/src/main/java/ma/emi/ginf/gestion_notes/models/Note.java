package ma.emi.ginf.gestion_notes.models;


import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

@Entity
public class Note {
    @EmbeddedId
    private PK id;
    private Double note;
    private String appreciation;
    



    public Note() {
    }


    public Note(Double note, String appreciation, Matiere matiere, Student student) {
        this.id = new PK(matiere, student);
        this.note = note;
        this.appreciation = appreciation;
    }


    public PK getId() {
        return this.id;
    }

    public void setId(PK id) {
        this.id = id;
    }

    public Double getNote() {
        return this.note;
    }

    public void setNote(Double note) {
        this.note = note;
    }

    public String getAppreciation() {
        return this.appreciation;
    }

    public void setAppreciation(String appreciation) {
        this.appreciation = appreciation;
    }


    @Override
    public String toString() {
        return "Note [id=" + id + ", note=" + note + ", appreciation=" + appreciation + "]";
    }

    

    


}
