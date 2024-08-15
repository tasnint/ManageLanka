package com.ManageLanka.Task_SpringBoot.repositories;
import com.ManageLanka.Task_SpringBoot.entities.User;
import com.ManageLanka.Task_SpringBoot.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findFirstByEmail(String username);

    Optional<User> findByUserRole(UserRole userRole);
}
