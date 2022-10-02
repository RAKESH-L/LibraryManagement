package com.mybootapp.library.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mybootapp.library.Repository.EmployeeRepository;
import com.mybootapp.library.Repository.LibraryRepository;
import com.mybootapp.library.model.Employee;
import com.mybootapp.library.model.Library;

@RestController
@CrossOrigin(origins = {"http://localhost:3023"})
public class LibraryController {
	
	@Autowired
	private LibraryRepository libraryRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@PostMapping("/library/insert")
	public Library insertBook(@RequestBody Library library) {
		return libraryRepository.save(library);
//		System.out.println("Library Management is Ready to start....");
//		System.out.println(library);
	}
	
	@GetMapping("/library/all-books")
	public List<Library> getAllBooks() {
		List<Library> list = libraryRepository.findAll();
		return list;
	}
	
	@PostMapping("insert/bookBorrowed")
	public Employee insertBook(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	@GetMapping("get/all-bookings")
	public List<Employee> getAllBokkings() {
		return employeeRepository.findAll(); 
	}
	@PostMapping("update/library/{lid}")
	public Library updateLibrary(@PathVariable("lid") Long lid,
								@RequestBody Library newlibrary) {
		Optional<Library> optional = libraryRepository.findById(lid);
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		
		Library oldLibrary = optional.get();
		
		oldLibrary.setAvailability(newlibrary.getAvailability());
		oldLibrary.setStatus(newlibrary.getStatus());
		
		return libraryRepository.save(oldLibrary);
		
	}
}
