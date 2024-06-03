import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { AuthInterceptor } from './utils/auth-interceptor.interceptor';
import { AddHeroeComponent } from './components/add-heroe/add-heroe.component';
import { GetHeroeComponent } from './components/get-heroe/get-heroe.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'addHeroe', component: AddHeroeComponent },
    { path: 'getHeroes', component: GetHeroeComponent },
    { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserAnimationsModule, 
        ToastrModule.forRoot(),
        HttpClientModule
    ],
    exports: [RouterModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
})
export class AppRoutingModule { }