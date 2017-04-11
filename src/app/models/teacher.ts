import { Entity } from './entity';
import { Lesson } from './lesson';

export class Teacher extends Entity {
    name: string;
    lessons?: Lesson[];
}
