import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  mocky(): Observable<any>{
    return this.http.get<any>("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d").pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<any>{
    if(error.error instanceof ErrorEvent){
      return throwError("Network Error");
    }
    else if(error.status == 404){
      return throwError("Not Found");
    }
    else if(error.status == 400){
      return throwError("Bad Request");
    }
    return throwError("Something went wront please try again");
    
  }
}
