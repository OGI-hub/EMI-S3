package ma.ac.emi;

public final class TwitterNotifier extends NotifierWrapper{

    public TwitterNotifier(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void sendMessage(String message) {
        System.out.println("Envoi via twitter: " + message);
        super.sendMessage(message);
    }
}
