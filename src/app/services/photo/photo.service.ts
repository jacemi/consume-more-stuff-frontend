import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  deletePhoto(id) {
    return this.http.delete(`/api/photos/${id}`);
  }
}
