package com.ManageLanka.Task_SpringBoot.services.auth;


import com.ManageLanka.Task_SpringBoot.dto.SignupRequest;
import com.ManageLanka.Task_SpringBoot.dto.UserDto;

public interface AuthService {

    UserDto signupUser(SignupRequest signupRequest);

    boolean hasUserWithEmail(String email);
}
