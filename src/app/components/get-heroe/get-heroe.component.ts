import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-heroe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-heroe.component.html',
  styleUrl: './get-heroe.component.css'
})
export class GetHeroeComponent implements OnInit {
constructor(private _heroeServices : HeroeService){

}
  heroes: any[] = [];
  ngOnInit(): void {
    this.getHeroes();
  }
  
getHeroes(){
  this._heroeServices.getHeroes().subscribe(data =>{
    this.heroes = data;
      console.log(data);
  })
}

}
