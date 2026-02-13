public class Produit {

    private int id;
    private Fournisseur fourn;

    public Produit(int id, Fournisseur fourne) {
        if(fourne.getProd() != null) fourne.getProd().setFourn(null);
        setId(id);
        setFourn(fourne);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Fournisseur getFourn() {
        return fourn;
    }

    public void setFourn(Fournisseur fourn) {
        if(fourn != null)
            fourn.setProd(this);
        this.fourn = fourn;
    }

    @Override
    public String toString() {
        return "Produit{" +
                "id=" + id +
                ", fourn=" + fourn +
                '}';
    }
}
