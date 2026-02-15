package ma.ac.emi;

public final class FacebookNotifier extends NotifierWrapper{

    public FacebookNotifier(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void sendMessage(String message) {
        System.out.println("Envoi via Facebook: " + message);
        super.sendMessage(message);
    }

}
