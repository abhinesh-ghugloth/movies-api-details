import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MoviesChar } from './movies-char';
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService {

  private avengers:string="http://www.omdbapi.com/?i=tt3896198&apikey=d48d7a34&s=avengers&page=1";
  private mummy:string="http://www.omdbapi.com/?i=tt3896198&apikey=d48d7a34&s=mummy&page=1";

  constructor(private http:Http) { }
  getMoviess():Observable<MoviesChar[]>{
    return this.http.get(this.avengers)
    .map((responce:Response)=> <MoviesChar[]>responce.json().Search)
    .do(data=>console.log(data))
    .catch(error=>{console.log(error);
    return Observable.throw(error.json())
    })
  }
  getOtherMovies():Observable<MoviesChar[]>{
    return this.http.get(this.mummy)
    .map((responce:Response)=> <MoviesChar[]>responce.json().Search)
    .do(data=>console.log(data))
    .catch(error=>{console.log(error);
    return Observable.throw(error.json())
    })
  }
}





