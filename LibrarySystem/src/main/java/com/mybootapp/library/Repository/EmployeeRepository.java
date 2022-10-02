package com.mybootapp.library.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mybootapp.library.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
