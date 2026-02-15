package ma.ac.emi;

public abstract class NotifierWrapper implements Notifier{
    protected Notifier notifierWrapped;

    public NotifierWrapper(Notifier notifier) {
        this.notifierWrapped = notifier;
    }

    public void sendMessage(String message) {
        notifierWrapped.sendMessage(message);
    }
}
