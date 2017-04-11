import { Entity } from './entity';
import { Lesson } from './lesson';

export class Student extends Entity {
    name: string;
    age?: number;
    lessons?: Lesson[];
}
