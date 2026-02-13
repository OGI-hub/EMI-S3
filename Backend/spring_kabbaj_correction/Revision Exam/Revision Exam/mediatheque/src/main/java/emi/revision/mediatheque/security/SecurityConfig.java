package emi.revision.mediatheque.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsManager() {
        PasswordEncoder encoder = this.passwordEncoder();

        UserDetails client = User.withUsername("client")
                                .password(encoder.encode("1234"))
                                .roles("USER")
                                .build();

        UserDetails admin = User.withUsername("admin")
                                .password(encoder.encode("admin"))
                                .roles("ADMIN")
                                .build();

        return new InMemoryUserDetailsManager(client, admin);
    }

    @Bean
    public SecurityFilterChain config(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.GET).authenticated()
                                                    .requestMatchers(HttpMethod.DELETE).hasRole("ADMIN")
                                                    .requestMatchers("/error").permitAll()
                                                    .requestMatchers(HttpMethod.POST, "/document/add").hasRole("ADMIN")
                                                    .requestMatchers(HttpMethod.PUT).hasAnyRole("USER", "ADMIN")
                                                    .anyRequest().authenticated()
                )
                .httpBasic(withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .formLogin(withDefaults())
                .build();
    }
}
