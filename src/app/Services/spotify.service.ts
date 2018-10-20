import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getSpotify(consulta: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCXHKlK_jR-kNDvwNtYXFFAnq2YtePEk0UYmWugowjrrDHb43aQv1ATPOcszEBwcUWpWwN5N2YkeLy-BJs'
    });

    const path = `https://api.spotify.com/v1/${consulta}`;

    return this.http.get(path, {headers});
  }

  getLanzamientos() {

    return this.getSpotify('browse/new-releases').pipe(
      map(data =>
        data['albums'].items
      ));
  }

  getArtista(id: string) {
    return this.getSpotify(`artists/${id}`);
  }

  getCanciones(id: string) {
    return this.getSpotify(`artists/${id}/top-tracks?country=co`).pipe(
      map(data =>
        data['tracks']
      ));
  }

}
