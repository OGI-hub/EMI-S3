package ma.ac.emi.ginfo.firstproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String coucou(){
        return "Hello";
    }
    @GetMapping("/emi")
    public String coucou2(){
        return "Hi EMISTE";
    }
    @GetMapping("/emi/tata")
    public String coucou3(){
        return "Hi";
    }

}
