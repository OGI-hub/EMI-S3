package emi.revision.scrutin.security;

// import static org.springframework.security.config.Customizer.withDefaults;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
public class SecurityConfig {

    // @Bean
    // public PasswordEncoder passwordEncoder() {
    //     return new BCryptPasswordEncoder();
    // }

    // @Bean
    // public InMemoryUserDetailsManager userDetailsManager() {
    //     String encodedPassword1 = this.passwordEncoder().encode("1234");
    //     String encodedPassword2 = this.passwordEncoder().encode("admin");

    //     UserDetails client = User.withUsername("client")
    //                             .password(encodedPassword1)
    //                             .roles("USER")
    //                             .build();

    //     UserDetails admin = User.withUsername("admin")
    //                             .password(encodedPassword2)
    //                             .roles("USER", "ADMIN")
    //                             .build();

    //     return new InMemoryUserDetailsManager(client, admin);
    // }

    // @Bean
    // public SecurityFilterChain config(HttpSecurity http) throws Exception{
    //     return http
    //             .csrf(csrf -> csrf.disable())
    //             .authorizeHttpRequests(auth ->
    //                                             auth
    //                                             .requestMatchers(HttpMethod.GET).authenticated()
    //                                             .requestMatchers(HttpMethod.POST).hasRole("ADMIN")
    //                                             .requestMatchers(HttpMethod.PUT).hasRole("ADMIN")
    //                                             .requestMatchers(HttpMethod.DELETE).hasRole("ADMIN")
    //                                             .anyRequest().authenticated()
    //             )
    //             .httpBasic(withDefaults())
    //             .build();
    // }
}
