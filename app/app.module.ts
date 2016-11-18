import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MenuComponent} from './Menu/MenuComponent';
import { MovieComponent} from './Movie/Movie.Component';
import { AppComponent }  from './app.component';
import { MovieCreditComponent }  from './Movie/MovieCredit.component';
import {MovieService} from './Service/Movie.Service';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,
              MenuComponent,
              MovieComponent,
            MovieCreditComponent],
  bootstrap: [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
