import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
    console.log(this.apiUrl);
  }

  upload(file, width, height): Observable<any> {
    const formData = new FormData();

    formData.append('width', width);
    formData.append('height', height);
    formData.append('file', file);

    let imageType = this.getImageTypeFromName(file);

    console.log(imageType);

    formData.append('imageType', imageType.toUpperCase());


    return this.httpClient.post<any>(this.apiUrl, formData);
  }

  getImage(id): Observable<any> {
    let url = this.apiUrl + `${id}`;

    return this.httpClient.get(url, { responseType: 'arraybuffer' });
  }

  private getImageTypeFromName(file: File): String {
    let imageType = file.name.split('.')[1];
    console.log(imageType);
    return imageType;
  }
}
