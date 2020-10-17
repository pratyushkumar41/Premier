package com.premier.dao;

import java.sql.SQLException;
import java.util.ArrayList;

import com.premier.model.sale;

public interface PremierDao {

	ArrayList<sale> saleData(int start, int limit)throws SQLException;

	int totalPage(int total)throws SQLException;

}
