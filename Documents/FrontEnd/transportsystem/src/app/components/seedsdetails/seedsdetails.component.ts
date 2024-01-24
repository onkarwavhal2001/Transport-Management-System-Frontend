import { Component } from '@angular/core';
import { Seeds } from '../../models/seeds';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedsserviceService } from '../../services/seedsservice.service';

@Component({
  selector: 'app-seedsdetails',
  templateUrl: './seedsdetails.component.html',
  styleUrl: './seedsdetails.component.css'
})
export class SeedsdetailsComponent {
  seedsId: number=0;
  seeds: Seeds=new Seeds();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: SeedsserviceService) { }

    ngOnInit() {
      this.seeds = new Seeds();
  
      this. seedsId = this.route.snapshot.params['seedsId'];
      
      
      this.service.getOneSeed(this.seedsId).subscribe((data)=>{
        console.log(data);
        this.seeds=data;
      })

    }
    list(){
      this.router.navigate(['slist']);
    }
}
