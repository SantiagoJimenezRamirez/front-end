import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroeService } from '../../services/heroe.service';
import { UpdateHeroe } from '../../interfaces/heroes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-heroe',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './edit-heroe.component.html',
  styleUrl: './edit-heroe.component.css'
})
export class EditHeroeComponent {
  id : string = '';
  name : string = '';
  description : string = '';

  constructor(private router : Router, private _heroeServices : HeroeService){
  }

  editHero():void{
    const Heroe : UpdateHeroe = {
      id : this.id,
      name : this.name,
      description : this.description
    }
    console.log(Heroe);
    
      this._heroeServices.updateHeroe(Heroe.id, Heroe).subscribe(response => {
        console.log(response);
        console.log(Heroe);
      });
    }
}