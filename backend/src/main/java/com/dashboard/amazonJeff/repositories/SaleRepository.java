package com.dashboard.amazonJeff.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dashboard.amazonJeff.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
