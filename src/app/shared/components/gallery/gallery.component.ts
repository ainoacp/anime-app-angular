import { Component, Input } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() list?: AnimeInterface[];
  @Input() title?: boolean;
}
