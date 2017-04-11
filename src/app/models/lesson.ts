import { Student } from './student';
import { Entity } from './entity';

export class Lesson extends Entity {
    name: string;
    date: Date;
    students?: Student[];
}
