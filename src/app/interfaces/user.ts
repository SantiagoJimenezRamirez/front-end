export interface User {
    username : string,
    password : string;
}

export interface RegisterUser{
    username : string,
    email : string,
    password : string,
    rol : string;
}

export interface LoginResponse {
    token: string;
  }
  