package com.bhawana.development.helper;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User with this Username is already there in DB !! Try with another credentials");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}

}
