import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url;
  constructor(public sanitizer: DomSanitizer ){}
  ngOnInit(): void {
    
   this.url =  this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tree/index.html');
  }
}
