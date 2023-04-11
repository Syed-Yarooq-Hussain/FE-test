import { Component } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  search: string = 'dish'
  pokemonData = [{
    name : '',
    url: ''
  }];
  constructor(private api:ApiService) {}

  async ngOnInit()  {
    await this.callPokemonApi();
    console.log("------------------------>>>>>>>>",this.pokemonData)

  }

  async callPokemonApi() {
    this.api.getPokemonData().subscribe((data: any)=>{
      this.pokemonData = data.results.slice(0, 151);
      console.log("------------------------>>>>>>>>",this.pokemonData)
    });
  }

  searchPokemon() {
    this.pokemonData = this.pokemonData.filter(element => element.name.includes(this.search));
    console.log("******************************", this.pokemonData)

    return
  }
}
