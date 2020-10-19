package com.premier.manager;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.premier.model.sale;

public interface PremierManager {

	ArrayList<sale> saleData(int start, int limit)throws SQLException;
	
	int totalPage(int total)throws SQLException;
	
	void getpremierAddForm(Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id);

	void getpremierEditForm(int si_number_id, Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id);
}
