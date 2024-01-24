import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SeedsserviceService } from '../../services/seedsservice.service';
import { Router } from '@angular/router';
import { Seeds } from '../../models/seeds';

@Component({
  selector: 'app-seedslist',
  templateUrl: './seedslist.component.html',
  styleUrl: './seedslist.component.css'
})
export class SeedslistComponent {
  public seeds: Observable<Seeds[]> =of([]);
  
  constructor(private service: SeedsserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.seeds = this.service.getAllSeeds();
  }

  seedDetails(id: number){
    this.router.navigate(['sdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['supdate', id]);
    }


  deleteSeed(id:number)
    {
      return this.service.deleteSeed(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
}
