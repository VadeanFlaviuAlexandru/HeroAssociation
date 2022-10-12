import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Blast', power: 'Superhuman Physical Prowess', altereEgo:'classified', rank:" S-Class" },
      { id: 2, name: 'Tornado of Terror', power: 'Psychokinesis', altereEgo:'Tatsumaki', rank:" S-Class" },
      { id: 3, name: 'Atomic Samurai', power: 'Master Swordsmanship', altereEgo:'Kamikaze', rank:" S-Class" },
      { id: 4, name: 'Child Emperor', power: 'Genius', altereEgo:'classified', rank:" S-Class" },
      { id: 5, name: 'Metal Knight' , power: 'Genius', altereEgo:'Bofoi', rank:" S-Class" },
      { id: 6, name: 'King', power: 'classified', altereEgo:'classified', rank:" S-Class" },
      { id: 7, name: 'Zombieman', power: 'Regeneration', altereEgo:'classified', rank:" S-Class" },
      { id: 8, name: 'Drive Knight', power: 'Fire Manipulation', altereEgo:'classified', rank:" S-Class" },
      { id: 9, name: 'Pig God', power: 'Inhuman Digestive System', altereEgo:'classified', rank:" S-Class" },
      {id: 10, name: 'SuperAlloy Darkshine', power: 'Master Hand-to-Hand ', altereEgo:'classified', rank:" S-Class" },
      {id: 11, name: 'Watchdog Man', power: 'Prowess', altereEgo:'classified', rank:" S-Class" },
      {id: 12, name: 'Flashy Flash', power: 'Superhuman Speed and Agility', altereEgo:'classified', rank:" S-Class" },
      {id: 13, name: 'Demon Cyborg', power: 'Highly Skilled and Strategic ', altereEgo:'Genos', rank:" S-Class" },
      {id: 14, name: 'Metal Bat', power: 'Fighting Spirit', altereEgo:'Bad', rank:" S-Class" },
      {id: 15, name: 'Silverfang', power: 'Karate', altereEgo:'classified', rank:" S-Class" },
      {id: 16, name: 'Tanktop Master', power: 'Expert Marksmanship', altereEgo:'classified', rank:" S-Class" },
      {id: 17, name: 'Puri-Puri Prisoner', power: 'Superhuman Physical', altereEgo:'classified', rank:" S-Class" },
      {id: 18, name: 'Sweet Mask', power: 'Regenaration', altereEgo:'classified', rank:" A-Class" },
      {id: 19, name: 'Blue Fire', power: 'Blue Fire', altereEgo:'classified', rank:" A-Class" },
      {id: 20, name: 'Magic Trick Man', power: 'Magic', altereEgo:'classified', rank:" A-Class" },
      {id: 21, name: 'Blizzard of Hell', power: 'Psychokinesis', altereEgo:'Fubuki', rank:" B-Class" },
      {id: 22, name: 'Mountain Ape', power: 'Strong as an ape', altereEgo:'classified', rank:" B-Class" },
      {id: 23, name: 'Glasses', power: 'Can see great distances', altereEgo:'classified', rank:" B-Class" },
      {id: 24, name: 'Jet Nice Guy', power: 'Fast', altereEgo:'classified', rank:" B-Class" },
      {id: 25, name: 'Mumen Rider', power: 'True Hero', altereEgo:'Satoru', rank:" C-Class" },
      {id: 26, name: 'Dynamite Man', power: 'Throwing Dynamites', altereEgo:'classified', rank:" C-Class" },
      {id: 27, name: 'Horse-Bone', power: 'Run fast as a horse', altereEgo:'classified', rank:" C-Class" },
      {id: 28, name: 'Ecolo G', power: 'Brute Strength', altereEgo:'classified', rank:" C-Class" },
      {id: 29, name: 'Poison', power: 'Poison', altereEgo:'classified', rank:" C-Class" },

    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}