import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/model/library.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  libraryArry: Library[];
  action: string;
  eid: 1;
  constructor(private libraryService: LibraryService, private router:Router) { }

  ngOnInit(): void {
    this.libraryService.getAllBooks().subscribe(data=>{
      this.libraryArry = data;
    });
    this.action = "Barrow";
  }
  change(id : number, status: string, name: string, genre: string){
    localStorage.setItem('id',String(id));
    localStorage.setItem('status',String(status));
    localStorage.setItem('name',String(name));
    localStorage.setItem('genre',String(genre));
    this.router.navigateByUrl('/book-form');
  }

}
