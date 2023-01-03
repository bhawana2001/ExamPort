package com.bhawana.development.services;

import java.util.Set;
import com.bhawana.development.entities.User;
import com.bhawana.development.entities.UserRole;

public interface UserService {
	
	//create user
	public User createUser(User user,Set<UserRole> userRoles) throws Exception;

	//get user by username
	public User getUserByUsername(String username);
	
	//delete user by id
	public void deleteUserById(Long userId);
}
