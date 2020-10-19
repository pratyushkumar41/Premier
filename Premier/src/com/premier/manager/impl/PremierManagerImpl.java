package com.premier.manager.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import com.premier.dao.PremierDao;
import com.premier.manager.PremierManager;
import com.premier.model.sale;

public class PremierManagerImpl implements PremierManager{
	
	private PremierDao premierDao;

	public PremierDao getPremierDao() {
		return premierDao;
	}

	public void setPremierDao(PremierDao premierDao) {
		this.premierDao = premierDao;
	}

	@Override
	public ArrayList<sale> saleData(int start, int limit) throws SQLException{
		return premierDao.saleData(start, limit);
	}

	@Override
	public int totalPage(int total) throws SQLException{
		return premierDao.totalPage(total);
	}

	@Override
	public void getpremierAddForm(Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id) {
		premierDao.getpremierAddForm(sale_date_id, purchase_quantity_id, sale_quantity_id,
				van_in_quantity_id, staff_attendance_id, additional_spend_id, sack_sale_id);
		
	}

	@Override
	public void getpremierEditForm(int si_number_id, Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id) {
		premierDao.getpremierEditForm(si_number_id,sale_date_id, purchase_quantity_id, sale_quantity_id,
				van_in_quantity_id, staff_attendance_id, additional_spend_id, sack_sale_id);
		
	}

}
