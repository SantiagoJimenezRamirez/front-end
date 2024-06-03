import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  constructor(private router : Router, private _heroeServices : HeroeService){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  getHeroes(){
    this._heroeServices.getHeroes().subscribe(data =>{
        console.log(data);
        alert('En la consola se han imprimido los valores')
    })
}
}
