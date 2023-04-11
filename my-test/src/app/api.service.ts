import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (
    private http:HttpClient) 
    {}


    getPokemonData() {
     return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    }
    
}


