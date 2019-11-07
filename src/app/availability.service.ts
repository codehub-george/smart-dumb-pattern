import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fruit } from './fruits/fruits';
import { Vegetable } from './vegetables/vegetable';

const fruits: Fruit[] = [
  {name: 'orange', country: 'Greece', availability: true},
  {name: 'apple', country: 'Italy', availability: true},
  {name: 'lemon', country: 'Greece', availability: false},
  {name: 'kiwi', country: 'Russia', availability: true}
];

const vegetables: Vegetable[] = [
  {name: 'spinach', country: 'Greece', availability: true},
  {name: 'tomato', country: 'Brazil', availability: true},
  {name: 'mushroom', country: 'Greece', availability: false},
  {name: 'lettuce', country: 'Russia', availability: true}
];

@Injectable()
export class AvailabilityService {

  constructor() { }

  fetchFruits(): Observable<Fruit[]> {
    return of(fruits);
  }

  fetchVegetables(): Observable<Vegetable[]> {
    return of(vegetables);
  }

}
