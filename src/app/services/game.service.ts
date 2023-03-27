import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url: string = 'http://localhost:5000/firestore-grafica-854c0/us-central1';
   juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {
    if(this.juegos.length > 0) {
      // no tenemos juegos 
      console.log('desde cache');
      return of(this.juegos);
    } else {
      console.log('Desde internet');
      return this.http.get<Game[]>(`${this.url}/api/goty`)
                .pipe(
                  tap(
                    juegos => this.juegos = juegos
                  )
                );
    }
  }

  votarJuego( id: string ) {
    return this.http.post(`${this.url}/api/goty/${id}`, {})
            .pipe(
              catchError( err => {
                return of(err.error);
              })
            )
  }
} 
