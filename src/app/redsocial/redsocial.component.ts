import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redsocial',
  templateUrl: './redsocial.component.html',
  styleUrls: ['./redsocial.component.css']
})
export class RedsocialComponent implements OnInit {
  idelemento :any;
  
  constructor() {
  

  }

  ngOnInit(): void {

    
  
  }

}

/**
 * 
    this.copyTextareaBtn.addEventListener('click', function (event) {
      this.copyTextarea = document.querySelector('.js-copytextarea');
      this.copyTextarea.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
    });
 */