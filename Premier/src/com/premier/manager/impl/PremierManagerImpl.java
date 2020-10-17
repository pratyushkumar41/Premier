package com.premier.manager.impl;

import java.sql.SQLException;
import java.util.ArrayList;

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

}
