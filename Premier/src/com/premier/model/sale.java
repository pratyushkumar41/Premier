package com.premier.model;

import java.util.Date;

public class sale {

	private int si_number; 
	private Date sale_date;
	private double in_product; 
	private double sale_product; 
	private double van_in_quantity; 
	private boolean staff_attendance;
  	private double additional_spend;
  	private int sack_sale;
  	
	public int getSi_number() {
		return si_number;
	}
	public void setSi_number(int si_number) {
		this.si_number = si_number;
	}
	public Date getSale_date() {
		return sale_date;
	}
	public void setSale_date(Date sale_date) {
		this.sale_date = sale_date;
	}
	public double getIn_product() {
		return in_product;
	}
	public void setIn_product(double in_product) {
		this.in_product = in_product;
	}
	public double getSale_product() {
		return sale_product;
	}
	public void setSale_product(double sale_product) {
		this.sale_product = sale_product;
	}
	public double getVan_in_quantity() {
		return van_in_quantity;
	}
	public void setVan_in_quantity(double van_in_quantity) {
		this.van_in_quantity = van_in_quantity;
	}
	public boolean isStaff_attendance() {
		return staff_attendance;
	}
	public void setStaff_attendance(boolean staff_attendance) {
		this.staff_attendance = staff_attendance;
	}
	public double getAdditional_spend() {
		return additional_spend;
	}
	public void setAdditional_spend(double additional_spend) {
		this.additional_spend = additional_spend;
	}
	public int getSack_sale() {
		return sack_sale;
	}
	public void setSack_sale(int sack_sale) {
		this.sack_sale = sack_sale;
	}
	  
}
