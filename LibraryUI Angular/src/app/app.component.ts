import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibraryService } from './service/library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private libraryService: LibraryService){ } //injecting ES

  ngOnInit():  void{

  }

  ngOnDestroy(): void{
    console.log('on destroy...');
  }

}
