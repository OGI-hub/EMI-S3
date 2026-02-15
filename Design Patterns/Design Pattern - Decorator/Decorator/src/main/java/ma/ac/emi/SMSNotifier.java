package ma.ac.emi;

public class SMSNotifier extends NotifierWrapper{

    public SMSNotifier(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void sendMessage(String message) {
        System.out.println("Envoi via SMS: " + message);
        super.sendMessage(message);
    }
}
