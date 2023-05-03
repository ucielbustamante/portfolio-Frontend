import { Person } from "./person";

export class Education {
    id?: number;
    name: string;
    img: string;
    status: string;
    person: Person;
  
    constructor(name: string, img: string, status: string, person: Person) {
      this.name = name;
      this.img = img;
      this.status = status;
      this.person = person;
    }
  }