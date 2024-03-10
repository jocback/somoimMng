package com.spring.global.config;

import com.spring.global.config.security.CustomAuthenticationFailureHandler;
import com.spring.global.config.security.CustomAuthenticationSuccessHandler;
import com.spring.global.config.security.CustomUserDetailsService;
import com.spring.global.config.security.LoginProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;

    @Autowired
    private CustomAuthenticationFailureHandler customAuthenticationFailureHandler;

    @Autowired
    private LoginProvider loginProvider;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/lib/**", "/js/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authenticationProvider(loginProvider)
                .authorizeRequests()
                .antMatchers("/login/**")
                .permitAll()
                .anyRequest()
                .authenticated()
//                .antMatchers("/sch/schRegister", "/mem/memRegister", "/login/workspace")
//                .authenticated()
//                .anyRequest()
//                .permitAll()

                .and()
                .formLogin()
                .loginPage("/login/loginForm")
                .loginProcessingUrl("/login")
                .usernameParameter("userId")
                .passwordParameter("userPw")
                .successHandler(customAuthenticationSuccessHandler)
                .failureHandler(customAuthenticationFailureHandler)
                .permitAll()

                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login/loginForm")
                .invalidateHttpSession(true).deleteCookies("JSESSIONID")

                .and()
                .addFilterBefore(new AuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                ;

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
