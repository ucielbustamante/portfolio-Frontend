import { Person } from "./person";

export class Skill {
    id?: number;
    name: string;
    value: string;
    person: Person;

    constructor(name: string, value: string, person: Person) {
        this.name = name;
        this.value = value;
        this.person = person;
      }

}
