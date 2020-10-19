package com.premier.dao.impl;


import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
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

@SuppressWarnings({ "deprecation", "unused" })
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


	@Override
	public void getpremierAddForm(Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id) {
		
		 System.out.println("IN ADD USING HIBERNATE");
			
		  try {
		         factory = new AnnotationConfiguration().
		                   configure().
		                   //addPackage("com.xyz") //add package if used.
		                   addAnnotatedClass(sale.class).
		                   buildSessionFactory();
		      } catch (Throwable ex) { 
		         System.err.println("Failed to create sessionFactory object." + ex);
		         throw new ExceptionInInitializerError(ex); 
		     }
		  Session session = factory.openSession();
	      Transaction tx = null;
	      
	      try {
	         tx = session.beginTransaction();
	         sale sale_pojo = new sale();
	         sale_pojo.setSale_date(sale_date_id);
	         sale_pojo.setIn_product(purchase_quantity_id);
	         sale_pojo.setSale_product(sale_quantity_id);
	         sale_pojo.setVan_in_quantity(van_in_quantity_id);
	         sale_pojo.setStaff_attendance(staff_attendance_id);
	         sale_pojo.setAdditional_spend(additional_spend_id);
	         sale_pojo.setSack_sale(sack_sale_id);
	         session.save(sale_pojo); 
	         tx.commit();
	      } catch (HibernateException e) {
	         if (tx!=null) tx.rollback();
	         e.printStackTrace(); 
	      } finally {
	         session.close(); 
	      }
	}


	@Override
	public void getpremierEditForm(int si_number_id, Date sale_date_id, double purchase_quantity_id, double sale_quantity_id,
			double van_in_quantity_id, boolean staff_attendance_id, double additional_spend_id, int sack_sale_id) {
		  System.out.println("IN EDIT USING HIBERNATE");
		  System.out.println(si_number_id);
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
	         sale sale_pojo = (sale)session.get(sale.class,si_number_id); 
	         sale_pojo.setSale_date(sale_date_id);
	         sale_pojo.setIn_product(purchase_quantity_id);
	         sale_pojo.setSale_product(sale_quantity_id);
	         sale_pojo.setVan_in_quantity(van_in_quantity_id);
	         sale_pojo.setStaff_attendance(staff_attendance_id);
	         sale_pojo.setAdditional_spend(additional_spend_id);
	         sale_pojo.setSack_sale(sack_sale_id);
			 session.update(sale_pojo); 
	         tx.commit();
	      } catch (HibernateException e) {
	         if (tx!=null) tx.rollback();
	         e.printStackTrace(); 
	      } finally {
	         session.close(); 
	      }
		
	}
}
