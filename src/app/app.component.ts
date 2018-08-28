import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MoviesChar } from './movies-char';
import { error } from 'selenium-webdriver';
import { LowerCasePipe } from '@angular/common/src/pipes';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(private moviesServie:MovieService){}
 term:any;
  mNames:MoviesChar[];
  copymNames:MoviesChar[]=[];
  errorMessages:string;
mumNames:MoviesChar[];
copymumNames:MoviesChar[]=[];
show:true;
  loadMovies(){
    this.moviesServie.getMoviess()
    .subscribe(
      mNames =>this.mNames=mNames,
      error=>this.errorMessages=<any>error,
()=> this.copymNames=this.mNames,

    );
  }

  getOtherMoviess(){
    this.moviesServie.getOtherMovies()
    .subscribe(
      mumNames =>this.mumNames=mumNames,
      error=>this.errorMessages=<any>error,
()=> this.copymumNames=this.mumNames,

    );
    console.log(this.copymNames,"this is movie list")
  }

allMovies(){
  this.moviesServie.getMoviess()
  .subscribe(
    mNames =>this.mNames=mNames,
    error=>this.errorMessages=<any>error,
()=> this.copymNames=this.mNames,

  );


  this.moviesServie.getOtherMovies()
    .subscribe(
      mumNames =>this.mumNames=mumNames,
      error=>this.errorMessages=<any>error,
()=> this.copymumNames=this.mumNames,

    );
}
}
