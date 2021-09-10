package com.dashboard.amazonJeff.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dashboard.amazonJeff.dto.SaleSuccessDTO;
import com.dashboard.amazonJeff.dto.SaleSumDTO;
import com.dashboard.amazonJeff.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("SELECT new com.dashboard.amazonJeff.dto.SaleSumDTO(obj.seller, SUM(obj.amount))" 
	         + " FROM  Sale AS obj GROUP BY obj.seller")
	  List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.dashboard.amazonJeff.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))" +
	          " FROM  Sale AS obj GROUP BY obj.seller")
	  List<SaleSuccessDTO> successGroupedBySeller();
}