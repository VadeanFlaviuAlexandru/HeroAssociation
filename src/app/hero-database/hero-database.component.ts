import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-database',
  templateUrl: './hero-database.component.html',
  styleUrls: ['./hero-database.component.css']
})
export class HeroDatabaseComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  hideSharedLinkCopyMessage = false;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {             //get the heroes from the service
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    this.hideSharedLinkCopyMessage = true;
    setTimeout( () => {
      this.hideSharedLinkCopyMessage = false;
    }, 2000);
  }
}
