import { Person } from "./person";

export class Project {
    id?: number;
    img: string;
    name: string;
    description: string;
    person: Person;

    constructor(img: string, name: string, description: string, person: Person) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.person = person;
      }
}
