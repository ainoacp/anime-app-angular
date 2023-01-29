import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  
  constructor(private http: HttpClient) {}

  getAnimesWeek() {
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")
  }
  getAnimesEmission() {
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count")
  }
  getAnimesAwaited() {
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count")
  }
  getAnimesBest() {
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating")
  }
  getAnimesPopular() {
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count")
  }
  
  getInitialAnimes() {
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count")
  }
  getSearchedAnimes(text:string) {
    return this.http.get(`https://kitsu.io/api/edge/anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}`)
  }
  getYearFilteredAnimes(years:any) {
    return this.http.get(`https://kitsu.io/api/edge/anime?filter%5Byear%5D=${years[0]}..${years[1]}&page%5Blimit%5D=20&page%5Boffset%5D=0&sort=-user_count`)
  }
}