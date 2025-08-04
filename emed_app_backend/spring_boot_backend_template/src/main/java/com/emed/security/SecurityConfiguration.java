package com.emed.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {

    private final CustomJwtFilter customJwtFilter;
    private final JwtAuthEntryPoint jwtAuthEntryPoint;

    // Use @Lazy to break potential circular dependencies
    public SecurityConfiguration(@Lazy CustomJwtFilter customJwtFilter, 
                               JwtAuthEntryPoint jwtAuthEntryPoint) {
        this.customJwtFilter = customJwtFilter;
        this.jwtAuthEntryPoint = jwtAuthEntryPoint;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF protection
            .csrf(csrf -> csrf.disable())
            
            // Configure authorization rules
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers(
                    "/swagger-ui/**",
                    "/v3/api-docs/**",
                    "/user/signin",
                    "/user/signup",
                    "/user/contactUs",
                    "/user/aboutUs"
                ).permitAll()
                
                // Role-based access
                .requestMatchers("/patientHome/**").hasRole("PATIENT")
                .requestMatchers("/adminHome/**").hasRole("ADMIN")
                .requestMatchers("/doctorHome/**").hasRole("DOCTOR")
                
                // All other requests need authentication
                .anyRequest().authenticated()
            )
            
            // Set session management to stateless
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            
            // Add JWT filter
            .addFilterBefore(customJwtFilter, UsernamePasswordAuthenticationFilter.class)
            
            // Configure authentication entry point
            .exceptionHandling(ex -> 
                ex.authenticationEntryPoint(jwtAuthEntryPoint));

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}