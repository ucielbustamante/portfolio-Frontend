import { Person } from "./person";

export class SocialMedia {
    id? : number;
    name : string;
    img : string;
    link : string;
    person : Person;

    constructor(name: string, img : string, link :string, person : Person){
        this.name = name;
        this.img = img;
        this.link = link;
        this.person = person;
    }
}
