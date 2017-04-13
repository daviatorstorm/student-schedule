import { Component, OnInit } from '@angular/core';

import { Lesson } from '../../models/lesson';
import { LessonsService } from '../../shared/services/lessons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lessons: Lesson[];
  rows: number[] = [1, 2, 3, 4, 5];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.getLessons().subscribe(data => {
      this.lessons = data;
    });
  }

  getRandomLessons() {
    const newArray = [];

    if (this.lessons) {
      for (let i = 0; i < this.lessons.length; i++) {
        const randomIndex = this.getRandom(1, this.lessons.length - 1);

        newArray.push(this.lessons[randomIndex]);
      }
    }

    return newArray;
  }

  private getRandom(start: number, end: number) {
    return Math.floor(Math.random() * end) + start;
  }
}
