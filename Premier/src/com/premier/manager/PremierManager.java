package com.premier.manager;

import java.sql.SQLException;
import java.util.ArrayList;

import com.premier.model.sale;

public interface PremierManager {

	ArrayList<sale> saleData(int start, int limit)throws SQLException;
	int totalPage(int total)throws SQLException;
}
