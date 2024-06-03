import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUser, User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../services/error.service';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [FormsModule, CommonModule, HttpClientModule, SpinnerComponent]
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  email: string = '';
  rol: string = '';
  loading : boolean = false;

  constructor(private _userService: UserService, private router: Router, private _error : ErrorService) { }

  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    if (passwordInput) {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    }
  }

  ngOnInit(): void {
    // Implementación de OnInit
  }

  addUser() {
    //Validation if input is empty
    if (this.username === '' || this.email === '' || this.password === '' || this.rol === '') {
      return alert('You must fill out all the fields');
    }

    const user: RegisterUser = {
      username: this.username,
      password: this.password,
      email : this.email,
      rol : this.rol
    };

    this.loading = true;
    this._userService.register(user).subscribe({
      next: (v) => {
        this.loading = false;
      alert(`Register user ${this.username} successful`);
      this.router.navigate(['/login']);
      },
      error: (e : HttpErrorResponse) => {
        this._error.msgError(e)
        this.loading = false
      },
      complete: () => console.info('complete') 
  })
  }
}
