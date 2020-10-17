package com.premier.dao.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

import com.premier.dao.PremierDao;
import com.premier.model.sale;

public class PremierDaoImpl implements PremierDao{
	
	private static SessionFactory factory;

	public ArrayList<sale> saleData(int start, int limit) throws SQLException {
		

		    System.out.println("IN GETDATA USING HIBERNATE");
		 	limit=start+limit;
		 	int total=totalPage(0);
		 	System.out.println(total);
		 	System.out.println(limit);
			if(limit>total)
	     		limit=total-start;
			int pagesize=limit;
	        try {
		         factory = new AnnotationConfiguration().configure().addAnnotatedClass(sale.class).buildSessionFactory();
		      } catch (Throwable ex) { 
		         System.err.println("Failed to create sessionFactory object." + ex);
		         throw new ExceptionInInitializerError(ex); 
		     }
	         Session session = factory.openSession();
		     Transaction tx = null;
		     List<sale> list = new ArrayList<sale>();
		     try {
		         tx = session.beginTransaction();
		         Query query=session.createQuery("from sale");  
		         query.setFirstResult(start);  
		         query.setMaxResults(pagesize);  
		         list=query.list(); 
		         
		     }catch (HibernateException e) {
		         if (tx!=null) tx.rollback();
		         e.printStackTrace(); 
		      } finally {
		         session.close(); 
		      }
		     return (ArrayList<sale>) list;
	}

	
	public int totalPage(int total) throws SQLException {

		  try {
		         factory = new AnnotationConfiguration().configure().addAnnotatedClass(sale.class).buildSessionFactory();		                   		                   		                               
		      } catch (Throwable ex) { 
		         System.err.println("Failed to create sessionFactory object." + ex);
		         throw new ExceptionInInitializerError(ex); 
		      }
		  Session session = factory.openSession();
	      Transaction tx = null;
	      
	      try {
	         tx = session.beginTransaction();
	         String hql = "SELECT COUNT(*) FROM sale";
	         Query query =  session.createQuery(hql); 
	         List<Object> list=(List<Object>)query.list();  
	         System.out.println(list.get(0));
	         Long lcount = (Long) list.get(0);
	         total = lcount.intValue();
	         tx.commit();
	      } catch (HibernateException e) {
	         if (tx!=null) tx.rollback();
	         e.printStackTrace(); 
	      } finally {
	         session.close(); 
	      }
		return total;
	}
}
