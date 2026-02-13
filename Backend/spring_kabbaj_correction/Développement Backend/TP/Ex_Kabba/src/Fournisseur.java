public class Fournisseur {

    private String name;
    private Produit prod = null;

    public Fournisseur(String name) {
        setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Produit getProd() {
        return prod;
    }
    public void setProd(Produit prod) {
        this.prod = prod;
    }


    @Override
    public String toString() {
        return "Fournisseur{" +
                "name='" + name + '\'' +
                ", prod=" + prod.getId() +
                '}';
    }
}
