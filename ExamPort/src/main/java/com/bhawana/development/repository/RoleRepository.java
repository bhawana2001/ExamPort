package com.bhawana.development.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhawana.development.entities.Role;

public interface RoleRepository extends JpaRepository<Role,Long> {

}
