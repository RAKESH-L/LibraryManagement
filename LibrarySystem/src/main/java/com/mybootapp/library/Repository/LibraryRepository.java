package com.mybootapp.library.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mybootapp.library.model.Library;

public interface LibraryRepository extends JpaRepository<Library, Long>{

}
