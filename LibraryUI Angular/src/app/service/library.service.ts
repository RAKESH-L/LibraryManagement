import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Library } from '../model/library.model';
import { Update } from '../model/update.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { } // Injecting a service

  postBook(library: Library): Observable<Library>{
    return this.http.post<Library>('http://localhost:2008/library/insert', library);
  }
  getAllBooks(): Observable<Library[]>{
    return this.http.get<Library[]>('http://localhost:2008/library/all-books')
  }
  postEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>('http://localhost:2008/insert/bookBorrowed', employee);
  }
  getAllBookings(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:2008/get/all-bookings');
  }
  updateBook(id: string, update: Update): Observable<Update>{
    return this.http.post<Update>('http://localhost:2008/update/library/' + id, update);
  }

}
