import { TestBed } from '@angular/core/testing';

import { LessonsService } from '../shared/services/lessons.service';
import { Lesson } from '../models/lesson';

describe('testing service: LessonsService', () => {
    const myModule = TestBed.configureTestingModule({
        providers: [LessonsService]
    });

    myModule.compileComponents();

    let lessonsService: LessonsService;

    beforeEach(() => {
        lessonsService = myModule.get(LessonsService);
    });

    it('should return all lessons', (done) => {
        lessonsService.getLessons().subscribe(res => {
            const lessons = res.data as Lesson[];

            if (lessons.length) {
                done();
            } else {
                throw new Error('Lessons are empty');
            }
        });
    });
});
