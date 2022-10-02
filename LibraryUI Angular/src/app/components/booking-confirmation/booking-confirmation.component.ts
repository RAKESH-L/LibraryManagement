import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  bookings: Employee[];
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getAllBookings().subscribe(data=>{
      this.bookings = data;
    });
    // this.libraryService.getAllBooks().subscribe(data=>{
    //   this.libraryArry = data;
    // });
  }

}
