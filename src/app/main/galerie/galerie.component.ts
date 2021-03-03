import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GalerieService } from 'src/app/shared/services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent implements OnInit {
  photos: Observable<any>|null
  constructor(private galerieservice: GalerieService) {}

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.photos = this.galerieservice.getPhotos();
  }
}
