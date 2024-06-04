import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes';
import { HeroeService } from '../../services/heroe.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-heroe',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent {
  name: string = '';
  description: string = '';

  constructor(private _heroeServices: HeroeService) {}

  onSubmitCreate(): void {
    const newHeroe: Heroe = {
      name: this.name,
      description: this.description
    };

    this._heroeServices.createHeroe(newHeroe).subscribe(response => {
      console.log(newHeroe);
      console.log(response);
    });
  }
}
