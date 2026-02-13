package emi.revision.dossier_medical.security;

// import static org.springframework.security.config.Customizer.withDefaults;
//
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
//
// @Configuration
// @EnableWebSecurity
//public class SecurityConfig {
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
//
//     @Bean
//     public InMemoryUserDetailsManager userDetailsManager() {
//         UserDetails client = User.withUsername("client")
//                             .password(this.passwordEncoder().encode("1234"))
//                             .roles("USER")
//                             .build();
//
//         UserDetails admin = User.withUsername("admin")
//                             .password(this.passwordEncoder().encode("admin"))
//                             .roles("USER", "ADMIN")
//                             .build();
//         return new InMemoryUserDetailsManager(client, admin);
//     }
//
//     @Bean
//     public SecurityFilterChain config(HttpSecurity http) throws Exception{
//         return http
//                 .csrf(csrf -> csrf.disable())
//                 .authorizeHttpRequests(auth -> auth
//                                             .requestMatchers(HttpMethod.GET, "dossier_medical/**").hasRole("ADMIN")
//                                             .requestMatchers(HttpMethod.POST).hasRole("ADMIN")
//                                             .requestMatchers(HttpMethod.DELETE).hasRole("ADMIN")
//                                             .requestMatchers(HttpMethod.PUT).hasRole("ADMIN")
//                                             .anyRequest().authenticated()
//                 )
//                 .httpBasic(withDefaults())
//                 .build();
//     }
//}
