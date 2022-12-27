import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Blast', power: 'Superhuman Physical Prowess', altereEgo:'classified', rank:" S-Class", colour:"blue" },
      { id: 2, name: 'Tornado of Terror', power: 'Psychokinesis', altereEgo:'Tatsumaki', rank:" S-Class", colour:"green" },
      { id: 3, name: 'Atomic Samurai', power: 'Master Swordsmanship', altereEgo:'Kamikaze', rank:" S-Class", colour:"cyan" },
      { id: 4, name: 'Child Emperor', power: 'Genius', altereEgo:'classified', rank:" S-Class", colour:"yellow" },
      { id: 5, name: 'Metal Knight' , power: 'Genius', altereEgo:'Bofoi', rank:" S-Class", colour:"silver" },
      { id: 6, name: 'King', power: 'classified', altereEgo:'classified', rank:" S-Class", colour:"yellow" },
      { id: 7, name: 'Zombieman', power: 'Regeneration', altereEgo:'classified', rank:" S-Class", colour:"green" },
      { id: 8, name: 'Drive Knight', power: 'Fire Manipulation', altereEgo:'classified', rank:" S-Class", colour:"silver" },
      { id: 9, name: 'Pig God', power: 'Inhuman Digestive System', altereEgo:'classified', rank:" S-Class", colour:"pink" },
      {id: 10, name: 'SuperAlloy Darkshine', power: 'Master Hand-to-Hand ', altereEgo:'classified', rank:" S-Class", colour:"black" },
      {id: 11, name: 'Watchdog Man', power: 'Prowess', altereEgo:'classified', rank:" S-Class", colour:"white" },
      {id: 12, name: 'Flashy Flash', power: 'Superhuman Speed and Agility', altereEgo:'classified', rank:" S-Class", colour:"yellow" },
      {id: 13, name: 'Demon Cyborg', power: 'Highly Skilled and Strategic ', altereEgo:'Genos', rank:" S-Class", colour:"red" },
      {id: 14, name: 'Metal Bat', power: 'Fighting Spirit', altereEgo:'Bad', rank:" S-Class", colour:"silver" },
      {id: 15, name: 'Silverfang', power: 'Karate', altereEgo:'classified', rank:" S-Class", colour:"silver" },
      {id: 16, name: 'Tanktop Master', power: 'Expert Marksmanship', altereEgo:'classified', rank:" S-Class", colour:"yellow" },
      {id: 17, name: 'Puri-Puri Prisoner', power: 'Superhuman Physical', altereEgo:'classified', rank:" S-Class", colour:"pink" },
      {id: 18, name: 'Sweet Mask', power: 'Regenaration', altereEgo:'classified', rank:" A-Class", colour:"pink" },
      {id: 19, name: 'Blue Fire', power: 'Blue Fire', altereEgo:'classified', rank:" A-Class", colour:"blue" },
      {id: 20, name: 'Magic Trick Man', power: 'Magic', altereEgo:'classified', rank:" A-Class", colour:"purple" },
      {id: 21, name: 'Blizzard of Hell', power: 'Psychokinesis', altereEgo:'Fubuki', rank:" B-Class", colour:"green" },
      {id: 22, name: 'Mountain Ape', power: 'Strong as an ape', altereEgo:'classified', rank:" B-Class", colour:"brown" },
      {id: 23, name: 'Glasses', power: 'Can see great distances', altereEgo:'classified', rank:" B-Class", colour:"white" },
      {id: 24, name: 'Jet Nice Guy', power: 'Fast', altereEgo:'classified', rank:" B-Class", colour:"orange" },
      {id: 25, name: 'Mumen Rider', power: 'True Hero', altereEgo:'Satoru', rank:" C-Class", colour:"yellow" },
      {id: 26, name: 'Dynamite Man', power: 'Throwing Dynamites', altereEgo:'classified', rank:" C-Class", colour:"orange" },
      {id: 27, name: 'Horse-Bone', power: 'Run fast as a horse', altereEgo:'classified', rank:" C-Class", colour:"white" },
      {id: 28, name: 'Ecolo G', power: 'Brute Strength', altereEgo:'classified', rank:" C-Class", colour:"cyan" },
      {id: 29, name: 'Poison', power: 'Poison', altereEgo:'classified', rank:" C-Class", colour:"green" },

    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}