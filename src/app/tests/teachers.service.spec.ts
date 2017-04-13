import { TestBed, async, getTestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDb } from '../data/inmemory-db';

import { TeachersService } from '../shared/services/teachers.service';
import { Student } from '../models/student';

describe('testing service: TeachersService', () => {
    let service: TeachersService;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDb)
            ],
            providers: [
                TeachersService
            ]
        });

        const testbed = getTestBed();
        service = testbed.get(TeachersService);
        done();
    });

    it('should return the list teachers', (done) => {
        service.getTeachers().subscribe((teachers: Student[]) => {
            expect(teachers.length).toBe(5);
            done();
        });
    });

    it('should return one teacher', (done) => {
        service.getById(4).subscribe((teacher: Student) => {
            expect(teacher).not.toBeNull();
            expect(teacher.name).toBe('Ben');
            done();
        });
    });

    it('should add teacher', (done) => {
        const mockTeacher: Student = { name: 'Mock', id: 6 };
        service.createTeacher(mockTeacher).subscribe((teacher: Student) => {
            expect(teacher).not.toBeNull();
            expect(teacher.name).toBe(mockTeacher.name);
            done();
        });
    });

    it('should delete teacher', (done) => {
        const teacherId = 3;
        service.deleteTeacher(teacherId).subscribe(() => {
            service.getById(teacherId).subscribe(() => {
                throw new Error('Teacher must be null');
            }, err => {
                expect(err).not.toBeNull();
                expect(err.status).toBe(404);
                done();
            });
        });
    });

    it('should update teacher', (done) => {
        const studentId = 4;
        service.getById(studentId).subscribe((teacher: Student) => {
            expect(teacher).not.toBeNull();
            expect(teacher).not.toBeUndefined();

            const updatedTeacher = teacher;
            const newTeacherName = 'Sharlotan';
            updatedTeacher.name = newTeacherName;

            service.updateTeacher(updatedTeacher).subscribe(() => {
                service.getById(studentId).subscribe((newTeacher: Student) => {
                    expect(teacher).not.toBeUndefined();
                    expect(teacher).not.toBeNull();
                    expect(newTeacher.name).toBe(newTeacherName);
                    done();
                });
            });
        });
    });
});
