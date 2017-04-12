import { Component, OnInit } from '@angular/core';
import { LessonsService } from './shared/services/lessons.service';

import { Lesson } from './models/lesson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subjects: Lesson;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.getLessons().subscribe(res => {
      this.subjects = res.data;
    });
  }
}
