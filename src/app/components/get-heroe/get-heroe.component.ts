import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-get-heroe',
  standalone: true,
  imports: [],
  templateUrl: './get-heroe.component.html',
  styleUrl: './get-heroe.component.css'
})
export class GetHeroeComponent implements OnInit {
constructor(private _heroeServices : HeroeService){

}
  ngOnInit(): void {
    this.getHeroes();
  }
  
getHeroes(){
  this._heroeServices.getHeroes().subscribe(data =>{
      console.log(data);
  })
}

}
