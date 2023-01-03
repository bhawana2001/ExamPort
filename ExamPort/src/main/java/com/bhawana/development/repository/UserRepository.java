package com.bhawana.development.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhawana.development.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{

	public User findByUsername(String username);


}
