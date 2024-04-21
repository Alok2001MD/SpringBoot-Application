package com.alok.QuizApplication.User;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class Security extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors() // Allow CORS
                .and()
                .csrf().disable()
                .authorizeRequests()
                .anyRequest().permitAll();
    }
}
