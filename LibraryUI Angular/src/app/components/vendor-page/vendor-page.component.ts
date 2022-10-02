import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Library } from 'src/app/model/library.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.css']
})
export class VendorPageComponent implements OnInit {

  library: Library;
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }
  onFormSubmit(bookForm : NgForm){
    let library: Library={
      name: bookForm.value.name,
      genre: bookForm.value.genre,
      price: bookForm.value.price,
      availability: 'Yes',
      status: 'Barrow'

    }
    console.log(library);
    this.libraryService.postBook(library).subscribe(data=>{
      this.library = data;
    });
    confirm("Do you want to Add this Book?")
  }
  // onVendorSubmit(vendorForm : NgForm){
  //   let vendor: Vendor={
  //     name: vendorForm.value.name,
  //     source: vendorForm.value.source,
  //     destination: vendorForm.value.destination,
  //     depDate: vendorForm.value.depDate,
  //     depTime: vendorForm.value.depTime,
  //     arvDate: vendorForm.value.arvDate,
  //     arvTime: vendorForm.value.arvTime,
  //     priceAdult: vendorForm.value.priceAdult,
  //     priceChild: vendorForm.value.priceChild,
  //     seats: vendorForm.value.seats
  //   }
  //   this.vendorService.bookFlight(vendor).subscribe(data=>{
  //     this.vendor = data;
  //   });
  // }
}
