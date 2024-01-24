import { Component } from '@angular/core';
import { Seeds } from '../../models/seeds';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedsserviceService } from '../../services/seedsservice.service';

@Component({
  selector: 'app-updateseeds',
  templateUrl: './updateseeds.component.html',
  styleUrl: './updateseeds.component.css'
})
export class UpdateseedsComponent {


  seedsId: number=0;
  seeds: Seeds=new Seeds();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: SeedsserviceService) { }


    ngOnInit() {
      this.seeds = new Seeds();
  
      this. seeds = this.route.snapshot.params['seedsId'];
      
      
      this.service.getOneSeed(this.seedsId).subscribe((data)=>{
        console.log(data);
        this.seeds=data;
      })
            
    }

    onSubmit(){
      this. updateSeed();
    }

    updateSeed()
    {
      this.service.updateSeed(this.seeds).subscribe((data)=>{
        console.log(data);
        this.seeds= new Seeds();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['slist']);
    }
}
