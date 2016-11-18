import { Injectable } from '@angular/core';
import {Http, Response}  from '@angular/http';
import { IMovie } from './IMovie.Interface';
import { IMovieCredit } from './IMovieCredit.Interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService
{
  private _serviceurl:string='https://api.themoviedb.org/3/movie/';
  private _appKey='?api_key=674ef557cedbaa3e8be1c5bd71f395d7';
  constructor(private _http:Http)
  {

  }

    getMoviedata(id:number)  : Observable<IMovie> {

return this._http.get(this._serviceurl+id+this._appKey).map((response:Response)=> <IMovie>response.json())
.do(data=> console.log('check data:' +JSON.stringify(data))).
catch(this.HandleError);
}
HandleError(error:Response){
  console.erro('got in error');
  console.erro(error);
  return Observable.throw(error.json().error || 'Server Error ');
}
getMovieCredit(id:number): Observable<IMovieCredit[]>
{
  return this._http.get(this._serviceurl+id+'/credits'+this._appKey).map((response:Response)=> <IMovieCredit>response.json().cast)
  .do(data=> console.log('check data:' +JSON.stringify(data))).
  catch(this.HandleError);
}
}
