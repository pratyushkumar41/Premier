package com.premier.action;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.premier.manager.PremierManager;
import com.premier.model.sale;

public class MainAction {
	
	private PremierManager premierManager;

	private String loginUser;
	private String loginPass;
	private String output; 
	private int start;
	private int limit;
	private int total;
	ArrayList<sale> data;
	
	public PremierManager getPremierManager() {
		return premierManager;
	}
	public void setPremierManager(PremierManager premierManager) {
		this.premierManager = premierManager;
	}
	
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
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public ArrayList<sale> getData() {
		return data;
	}
	public void setData(ArrayList<sale> data) {
		this.data = data;
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
	
	public String saleData()throws IOException, ClassNotFoundException, SQLException {
		System.out.println("Inside SALE DATA");
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		PremierManager premierManager = (PremierManager)context.getBean("premierManager");
		setData(premierManager.saleData(getStart(),getLimit()));
		setTotal(premierManager.totalPage(getTotal()));
		return "success";
	}
}
