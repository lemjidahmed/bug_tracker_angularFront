import {Component, OnInit} from '@angular/core';
import { BugService } from '../services/bug.service';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent implements OnInit{
  bugs! :Array<any>;
  errorMessage!:string;
  currentBug!: Bug;
  currentIndex = -1;
  title = '';

  constructor(private bugService:BugService){}


  ngOnInit() {
    this.retrieveBugs();
  }

  retrieveBugs(): void {
    this.bugService.getAllBugs()
      .subscribe({
        next:(data:any)=>{this.bugs=data},
      error:(err:any)=>{this.errorMessage=err}
      });
  }

  refreshList(): void {
    this.retrieveBugs();
    this.currentBug = undefined;
    this.currentIndex = -1;
  }

  removeBug(bug:Bug): void {
    this.bugService.deleteBug(bug.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.refreshList();
        },
        error: (err) => {
          console.log(err);
        }
      });

  }

}
