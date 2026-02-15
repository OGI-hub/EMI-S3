package ma.ac.emi;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Notifier emailNotifier = new EmailNotifier();
        Notifier facebookNotifier = new FacebookNotifier(emailNotifier);
        Notifier twitterNotifier = new TwitterNotifier(facebookNotifier);

        twitterNotifier.sendMessage("Salam");
    }
}