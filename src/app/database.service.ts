import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picture } from './shop/picture.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseUrl = 'https://scrumino-ad287.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getPicturesList() {
    return this.http.get<Picture[]>(this.databaseUrl + '/cats/cats.json');
  } 

}
