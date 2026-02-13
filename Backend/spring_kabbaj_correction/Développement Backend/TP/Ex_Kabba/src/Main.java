
public class Main {
    public static void main(String[] args) {

        Fournisseur fourn = new Fournisseur("test");

        Produit prod1 = new Produit(123, fourn);

        System.out.println(fourn);
        System.out.println(prod1);

        System.out.println("*************************");

        Produit prod2 = new Produit(987, fourn);

        System.out.println(fourn);
        System.out.println(prod1);
        System.out.println(prod2);

    }
}