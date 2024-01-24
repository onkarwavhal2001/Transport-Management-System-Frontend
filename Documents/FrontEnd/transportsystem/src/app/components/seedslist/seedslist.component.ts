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
  seedDetails(id: number){
    this.router.navigate(['sdetails', id]);
  }
  getAll() {
    this.seeds = this.service.getAllSeeds();
  }
}
