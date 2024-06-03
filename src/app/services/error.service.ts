import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() {}
  msgError(error: HttpErrorResponse){
    if(error.error.msg){
      alert(error.error.msg);
    }else{
      alert(`Opps Error: ${error}`)
    }
  }
}
