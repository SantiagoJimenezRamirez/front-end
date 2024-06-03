import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroeService } from '../../services/heroe.service';
import { HttpHeaders } from '@angular/common/http';
import { Heroe } from '../../interfaces/heroes';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavbarComponent]
})
export class DashboardComponent implements OnInit {
    constructor(private _heroeServices : HeroeService){

    }
    ngOnInit(): void {
        this.getHeroes();
        this.deleteHeroe;
        this.createHeroe;
    }
    getHeroes(){
        this._heroeServices.getHeroes().subscribe(data =>{
            console.log(data);
        })
    }
    deleteHeroe(id: number): void {
        this._heroeServices.deleteHeroe(id).subscribe(response => {
          console.log(response); // Manejar la respuesta como desees
        });
      }
      updateHeroe(name: string, heroeData: Heroe): void {
        this._heroeServices.updateHeroe(name, heroeData).subscribe(response => {
          console.log(response); // Manejar la respuesta como desees
        });
      }
      
      createHeroe(heroeData: Heroe): void {
        this._heroeServices.createHeroe(heroeData).subscribe(response => {
          console.log(response); // Manejar la respuesta como desees
        });
      }
      

}
