import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private location: Location
    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {             //get the heroes from the service
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }

  model = new Hero(18, '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
}
