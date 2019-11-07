import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruits';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: Fruit[];

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
    this.service.fetchFruits().subscribe(fruits => this.fruits = fruits);
  }

  refreshStatus(name: string) {
    console.log('refresh ' + name);
  }

  refreshAll() {
    console.log('refresh list');
  }
}
