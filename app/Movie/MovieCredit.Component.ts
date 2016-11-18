import { Component } from '@angular/core';
import { MovieService } from 'app/Service/Movie.Service';
import { IMovieCredit } from './IMovieCredit.Interface';

@Component({
    selector: 'at-movieCredit',
    templateUrl: 'app/Movie/MovieCredit.Component.html'
})
export class MovieCreditComponent implements OnInit
{
movieCredit : IMovieCredit[];
errorMessage: string;
constructor(private _movieService: MovieService)
{

}
ngOnInit(): void
{
this._movieService.getMovieCredit(284052).subscribe(
  movie=>this.movieCredit=movie,
  error=>this.errorMessage=<any>error
);
//console.log(this.movieCredit);
}
}
