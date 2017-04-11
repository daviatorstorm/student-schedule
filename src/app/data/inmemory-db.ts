import { InMemoryDbService } from 'angular-in-memory-web-api';

import { lessons } from './lessons.mock';
import { students } from './students.mock';
import { teachers } from './teachers.mock';

export class InMemoryDb implements InMemoryDbService {
    createDb() {
        return {
            lessons,
            students,
            teachers
        };
    }
}
