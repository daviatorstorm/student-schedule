import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LessonsService } from '../shared/services/lessons.service';
import { Lesson } from '../models/lesson';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDb } from '../data/inmemory-db';

describe('testing service: LessonsService', () => {
    let service: LessonsService;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDb)
            ],
            providers: [
                LessonsService
            ]
        });

        service = getTestBed().get(LessonsService);
        done();
    });

    it('should return the list lessons', (done) => {
        service.getLessons().subscribe((data: Lesson[]) => {
            expect(data.length).toBe(5);
            done();
        });
    });
});
