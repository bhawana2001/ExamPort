package com.bhawana.development.services.Impl;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhawana.development.entities.User;
import com.bhawana.development.entities.UserRole;
import com.bhawana.development.repository.RoleRepository;
import com.bhawana.development.repository.UserRepository;
import com.bhawana.development.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	
	//Create User
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {

		//find user is it is already present or not
		User local = this.userRepository.findByUsername(user.getUsername());

		if (local != null) {
			System.out.println("User is already there!!");
			throw new Exception("User is already present!!");
		} else {
			// user create

			// fetch role of user
			for (UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			// assign role to user
			user.getUserRoles().addAll(userRoles);

			// save user in userRepository
			local = this.userRepository.save(user);
		}

		return local;
	}
	
	//get user by username
	@Override
	public User getUserByUsername(String username) {
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUserById(Long userId) {
		this.userRepository.deleteById(userId);
	}
	
}
