import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { catchError, } from 'rxjs/operators';

@Injectable({//allows Angular to optimize an application by removing the service if it isn't used.
  providedIn: 'root' //When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. 
})
export class HeroService {
  //Define the heroesUrl of the form :base/:collectionName 
  //with the address of the heroes resource on the server. 
  //Here base is the resource to which requests are made, 
  //and collectionName is the heroes data object
  //in the in-memory-data-service.ts.
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    //All HttpClient methods return an RxJS Observable of something.
    //This particular call to HttpClient.get() returns an Observable<Hero[]>, which is an observable of hero arrays. 
    //HttpClient.get() returns the body of the response as an untyped JSON object by default. 
    //Applying the optional type specifier, <Hero[]> , adds TypeScript capabilities, which reduce errors during compile time.
  }

  //To catch errors, you "pipe" the observable result from http.get() 
  //through an RxJS catchError() operator.

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`)
      )
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}
}

