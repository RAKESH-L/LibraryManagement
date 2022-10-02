import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { Update } from 'src/app/model/update.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'] 
})
export class BookFormComponent implements OnInit {

  id: string;
  name: string;
  genre: string;
  status: string;
  employeeArray: Employee;
  updated: Update;
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.name = localStorage.getItem('name');
    this.genre = localStorage.getItem('genre');
    this.status = localStorage.getItem('status');
  }
  onFormSubmit(bookForm: NgForm){
    let employee: Employee={
      name: bookForm.value.name,
      bookName: this.name,
      genre: this.genre,
      date: bookForm.value.date,
      status: 'Borrowed'
    }
    this.libraryService.postEmployee(employee).subscribe(data=>{
      this.employeeArray = data;
    });
    let update: Update={
      availability: 'No',
      status: 'Return'
    }
    this.libraryService.updateBook(this.id, update).subscribe(data=>{
      this.updated = data;
    });
    confirm('Are you sure?');
  }

}
