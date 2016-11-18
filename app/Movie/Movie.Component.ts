import { Component } from '@angular/core';
import { MovieService } from 'app/Service/Movie.Service';
import { IMovie } from './IMovie.Interface';

@Component({
    selector: 'at-movie',
    templateUrl: 'app/Movie/Movie.Component.html'
})
export class MovieComponent implements OnInit
{
movies : IMovie={"title":"tets"};
errorMessage: string;
constructor(private _movieService: MovieService)
{

}
ngOnInit(): void
{
this._movieService.getMoviedata(284052).subscribe(
  movie=>this.movies=movie,
  error=>this.errorMessage=<any>error
);
console.log(this.movies);
}
}
