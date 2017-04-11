import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(res => {
      console.log(res);
    });
  }
}
