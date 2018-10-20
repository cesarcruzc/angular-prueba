import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../Services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  lanzamientos: any[] = [];

  constructor(private spotify: SpotifyService, private router: Router) {

    this.spotify.getLanzamientos()
      .subscribe((data: any) => {
        // console.log(data);
        this.lanzamientos = data;
      });
  }

  irArtista(id: any) {
    // console.log(id);
    this.router.navigate(['/artista', id]);
  }

  ngOnInit() {
  }

}
