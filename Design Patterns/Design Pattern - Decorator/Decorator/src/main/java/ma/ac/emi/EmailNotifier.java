package ma.ac.emi;

public final class EmailNotifier implements Notifier{

    @Override
    public void sendMessage(String message) {
        System.out.println("Envoi via Email: " + message);
    }
}
