package com.bhawana.development.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhawana.development.entities.Role;
import com.bhawana.development.entities.User;
import com.bhawana.development.entities.UserRole;
import com.bhawana.development.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	//Create user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		//set user role
		Set<UserRole> roles=new HashSet<>();
		
		//set role to user
		Role role=new Role();
		role.setRoleId(45L);
		role.setRolename("NORMAL");
		
		//set user and role to userRole
		UserRole userRole=new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		//add userRole to roles
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
	}
	
	//Get users
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUserByUsername(username);
	}
	
	//delete user by user id
	@DeleteMapping("/{userId}")
	public void deleteUserById(@PathVariable("userId") Long userId) {
		this.userService.deleteUserById(userId);
	}
	
	//update user

}
