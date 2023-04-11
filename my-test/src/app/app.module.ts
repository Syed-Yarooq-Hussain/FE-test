import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { HttpClientModule } from '@angular/common/http';
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
  /*   BrowserModule,
    HttpClientModule, */
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
