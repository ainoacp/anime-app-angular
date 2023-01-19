import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from './../../shared/services/animes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy{
  
  animesWeek?: AnimeInterface[];
  animesEmission?: AnimeInterface[];
  animesAwaited?: AnimeInterface[];
  animesBest?: AnimeInterface[];
  animesPopular?: AnimeInterface[];

  constructor(private animesService: AnimesService) {}
    
    ngOnInit() {
      this.animesService.getAnimesWeek().subscribe((res:any) => {
        this.animesWeek = res.data;
        console.log(this.animesWeek);
      });
      this.animesService.getAnimesEmission().subscribe((res:any) => {
        this.animesEmission = res.data;
        console.log(this.animesEmission);
      });
      this.animesService.getAnimesAwaited().subscribe((res:any) => {
        this.animesAwaited = res.data;
        console.log(this.animesAwaited);
      });
      this.animesService.getAnimesBest().subscribe((res:any) => {
        this.animesBest = res.data;
        console.log(this.animesBest);
      });
      this.animesService.getAnimesPopular().subscribe((res:any) => {
        this.animesPopular = res.data;
        console.log(this.animesPopular);
      });
    }

    ngOnDestroy() {
      console.log('Me destruyo');
    }
}
