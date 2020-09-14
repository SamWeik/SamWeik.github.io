import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public aboutStatus = false;
  public noteStatus = false;
  public resumeStatus = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.selectComponent();
    console.log(this.aboutStatus);
    console.log(this.noteStatus);
    console.log(this.resumeStatus)
  }
  selectComponent() {
    if(this.router.url=="/About"){
      this.aboutStatus=true;
      this.noteStatus = false;
      this.resumeStatus = false;
    }
    else if(this.router.url=="/Notes"){
      this.noteStatus = true;
      this.resumeStatus = false;
      this.aboutStatus = false;
    }
    else if(this.router.url=="/Resume"){
      this.resumeStatus = true;
      this.noteStatus = false;
      this.aboutStatus = false;
    }
  }

}
