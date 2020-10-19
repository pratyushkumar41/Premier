package com.premier.action;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

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
	
	private String day_manager_id;
	private Date sale_date_id;
	private double purchase_quantity_id;
	private double sale_quantity_id;
	private double van_in_quantity_id;
	private boolean staff_attendance_id;
	private double additional_spend_id;
	private int sack_sale_id;
	private int si_number_id;
    private String add;
    private String edit;
	
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
	
	public String getDay_manager_id() {
		return day_manager_id;
	}
	public void setDay_manager_id(String day_manager_id) {
		this.day_manager_id = day_manager_id;
	}
	public Date getSale_date_id() {
		return sale_date_id;
	}
	public void setSale_date_id(Date sale_date_id) {
		this.sale_date_id = sale_date_id;
	}
	public double getPurchase_quantity_id() {
		return purchase_quantity_id;
	}
	public void setPurchase_quantity_id(double purchase_quantity_id) {
		this.purchase_quantity_id = purchase_quantity_id;
	}
	public double getSale_quantity_id() {
		return sale_quantity_id;
	}
	public void setSale_quantity_id(double sale_quantity_id) {
		this.sale_quantity_id = sale_quantity_id;
	}
	public double getVan_in_quantity_id() {
		return van_in_quantity_id;
	}
	public void setVan_in_quantity_id(double van_in_quantity_id) {
		this.van_in_quantity_id = van_in_quantity_id;
	}
	public boolean isStaff_attendance_id() {
		return staff_attendance_id;
	}
	public void setStaff_attendance_id(boolean staff_attendance_id) {
		this.staff_attendance_id = staff_attendance_id;
	}
	public double getAdditional_spend_id() {
		return additional_spend_id;
	}
	public void setAdditional_spend_id(double additional_spend_id) {
		this.additional_spend_id = additional_spend_id;
	}
	public int getSack_sale_id() {
		return sack_sale_id;
	}
	public void setSack_sale_id(int sack_sale_id) {
		this.sack_sale_id = sack_sale_id;
	}
	public int getSi_number_id() {
		return si_number_id;
	}
	public void setSi_number_id(int si_number_id) {
		this.si_number_id = si_number_id;
	}
	public String getAdd() {
		return add;
	}
	public void setAdd(String add) {
		this.add = add;
	}
	public String getEdit() {
		return edit;
	}
	public void setEdit(String edit) {
		this.edit = edit;
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
		((ClassPathXmlApplicationContext) context).close();
		return "success";
	}
	
	public String premierAddForm() throws ClassNotFoundException {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		PremierManager premierManager = (PremierManager)context.getBean("premierManager");
		premierManager.getpremierAddForm(getSale_date_id(),getPurchase_quantity_id(),getSale_quantity_id(),getVan_in_quantity_id(),isStaff_attendance_id(),getAdditional_spend_id(),getSack_sale_id());
		((ClassPathXmlApplicationContext) context).close();
		return "success";
	}
	
	public String premierEditForm() throws ClassNotFoundException {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		PremierManager premierManager = (PremierManager)context.getBean("premierManager");
		premierManager.getpremierEditForm(getSi_number_id(), getSale_date_id(),getPurchase_quantity_id(),getSale_quantity_id(),getVan_in_quantity_id(),isStaff_attendance_id(),getAdditional_spend_id(),getSack_sale_id());
		((ClassPathXmlApplicationContext) context).close();
		return "success";
	}
}
