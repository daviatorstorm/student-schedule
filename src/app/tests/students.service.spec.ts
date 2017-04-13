import { TestBed, async, getTestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDb } from '../data/inmemory-db';

import { StudentsService } from '../shared/services/students.service';
import { Student } from '../models/student';

describe('testing service: StudentsService', () => {
    let service: StudentsService;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDb)
            ],
            providers: [
                StudentsService
            ]
        });

        const testbed = getTestBed();
        service = testbed.get(StudentsService);
        done();
    });

    it('should return the list students', (done) => {
        service.getStudents().subscribe((students: Student[]) => {
            expect(students.length).toBe(5);
            done();
        });
    });

    it('should return one student', (done) => {
        service.getById(4).subscribe((student: Student) => {
            expect(student).not.toBeNull();
            expect(student.name).toBe('Shpok');
            done();
        });
    });

    it('should add student', (done) => {
        const mockStudent: Student = { name: 'Mock', age: 21, id: 6 };
        service.createStudent(mockStudent).subscribe((student: Student) => {
            expect(student).not.toBeNull();
            expect(student.name).toBe(mockStudent.name);
            expect(student.age).toBe(mockStudent.age);
            done();
        });
    });

    it('should delete student', (done) => {
        const studentId = 3;
        service.deleteStudent(studentId).subscribe(() => {
            service.getById(studentId).subscribe((nullStudent: Student) => {
                console.log(nullStudent);
                throw new Error('Student must be null');
            }, err => {
                expect(err).not.toBeNull();
                expect(err.status).toBe(404);
                done();
            });
        });
    });

    it('should update student', (done) => {
        const studentId = 4;
        service.getById(studentId).subscribe((student: Student) => {
            expect(student).not.toBeNull();
            expect(student).not.toBeUndefined();

            const updatedStudent = student;
            const newStudentName = 'Sharlotan';
            updatedStudent.name = newStudentName;

            service.updateStudent(updatedStudent).subscribe(() => {
                service.getById(studentId).subscribe((newStudent: Student) => {
                    expect(student).not.toBeUndefined();
                    expect(student).not.toBeNull();
                    expect(newStudent.name).toBe(newStudentName);
                    done();
                });
            });
        });
    });
});
