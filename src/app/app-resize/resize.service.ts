import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
  }

  upload(file): Observable<any> {
    const formData = new FormData();

    formData.append('width', '500');
    formData.append('height', '500');
    formData.append('file', file);

    return this.httpClient.post<any>(this.apiUrl, formData );
  }
}
