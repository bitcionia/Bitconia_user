import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
export class ControlInput {
  constructor(
    public genUrl?: string,
    public firstConfirmUrl?: string,
    public showPuzzle?: boolean
  ) {
    this.genUrl = genUrl || '/api/gen';
    this.firstConfirmUrl = firstConfirmUrl || '/api/firstConfirm';
    this.showPuzzle = showPuzzle || false;
  }
}

export interface Result {
  success: boolean;
  code: string;
  msg: string;
  errorMsg: string;
  data: any;
}

export interface VertifyQuery {
  move: number;
  action: number[];
}
@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(
    private http: HttpClient,
  ) { }

  getHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true   //  it's important to keep session !
  };

  getAuthImage(url: string): Observable<Result> {
    return this.http.get<Result>(url, this.getHttpOptions)
      .pipe(
        tap(_ => console.log('xfu: ' + url))
      );
  }

  vertifyAuthImage(url: string, query: VertifyQuery): Observable<Result> {
    return this.http.post<Result>(url, query, this.getHttpOptions)
      .pipe(
        tap(_ => console.log('xfu: ' + url))
      );
  }
}
