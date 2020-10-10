package com.premier.action;

public class MainAction {

	private String loginUser;
	private String loginPass;
	private String output; 
	
	
	public String getLoginUser() {
		return loginUser;
	}
	public void setLoginUser(String loginUser) {
		this.loginUser = loginUser;
	}


	public String getLoginPass() {
		return loginPass;
	}
	public void setLoginPass(String loginPass) {
		this.loginPass = loginPass;
	}
	

	public String getOutput() {
		return output;
	}
	public void setOutput(String output) {
		this.output = output;
	}
	public String login() {
		System.out.println("Inside login");
		if(loginUser.equals("Pk")&&loginPass.equals("12")) {
			System.out.println("Credentials is correct");
		}else {
			System.out.println("Credentials is Incorrect");
			return "failure";
		}
		return "success";
	}
}
