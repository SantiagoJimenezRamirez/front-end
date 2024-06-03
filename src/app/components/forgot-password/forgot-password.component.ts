import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email: string = '';
  
  constructor(private _userService: UserService, private router: Router) { }

  sendEmailPassword() {
    if (this.email === '') {
      return alert('You must fill out all the fields');
    }
    this._userService.forgotPassword(this.email).subscribe(
      response => {
        if (response.msg) {
          // El email existe, puedes continuar con el proceso de recuperación de contraseña
          alert('El email existe');
        } else{
          alert('El mail no existe')
        } 
      },
      (error : HttpErrorResponse) => {
        alert('Error en la solicitud: ' + error.error);
      }
    );
  }
}
