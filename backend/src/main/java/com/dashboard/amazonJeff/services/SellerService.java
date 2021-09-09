package com.dashboard.amazonJeff.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.amazonJeff.dto.SellerDTO;
import com.dashboard.amazonJeff.entities.Seller;
import com.dashboard.amazonJeff.repositories.SellerRepository;

@Service
public class SellerService {
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
}