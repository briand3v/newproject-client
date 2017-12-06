import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  showAllPhotos() {
    return this.http.get(this.baseUrl + '/photo').map((res: Response) => res.json());
  }

}
