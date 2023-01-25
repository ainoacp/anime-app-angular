import { AnimesService } from './../../shared/services/animes.service';
import { AnimeInterface } from './../../shared/models/Anime.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss']
})
export class AnimesPageComponent implements OnInit{
  
  animes: AnimeInterface[] = [];
  animesSearched: AnimeInterface[] = [];
  animesFiltered: AnimeInterface[] = [];
  text:string = '';
  years:number[] = [1907, 2025];

  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    this.animesService.getInitialAnimes().subscribe((res:any) => {
      this.animes = res.data;
      console.log(res.data);
    })
  }

  search() {
    this.animesService.getSearchedAnimes(this.text).subscribe((res:any) => {
      this.animes = res.data;
      this.animesSearched = res.data;
      console.log(res.data);
    })
  }

  filter(years:number[]) {
    this.animesService.getYearFilteredAnimes(years).subscribe((res:any) => {
      this.animes = res.data;
      this.animesFiltered = res.data;
      console.log(res.data);
    })
  }

  
}
