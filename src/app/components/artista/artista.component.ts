import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../Services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  canciones: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(parametros => {
      this.getArtista(parametros['id']);
      this.getCanciones(parametros['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
    });
  }

  getCanciones(id: string) {
    this.spotify.getCanciones(id).subscribe(canciones => {
      console.log(canciones);
      this.canciones = canciones;
    });
  }

  ngOnInit() {
  }

}
