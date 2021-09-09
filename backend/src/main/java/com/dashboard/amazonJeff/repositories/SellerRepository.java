package com.dashboard.amazonJeff.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dashboard.amazonJeff.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
	
}
