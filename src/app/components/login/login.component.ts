import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { data } from 'autoprefixer';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../services/error.service';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [RegisterComponent, RouterModule, ForgotPasswordComponent, FormsModule, HttpClientModule, SpinnerComponent, CommonModule]
})
export class LoginComponent implements OnInit{
  username : string = '';
  password : string = '';
  loading : boolean  = false;

  constructor(private  _userService : UserService, private router : Router, private _error : ErrorService){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login(){
    if (this.username == ''  || this.password == ''){
      alert('Porfavor diligenciar todos los parametros')
      return
    }

    const user : User = {
      username : this.username,
      password : this.password
    }
    this.loading = true;
    this._userService.login(user).subscribe({
      next: (token: any) => {
        localStorage.setItem('token', token.token) // Accede a la propiedad token del objeto
        this.router.navigate(['/dashboard'])
        console.log(token.token); // Imprime el valor del token en sí
      },
      error: (e : HttpErrorResponse) =>{
        this._error.msgError(e)
        this.loading = false;
      }
    })
  }
} 
