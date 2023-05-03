export class Person {
    id?:number;
    name: String;
    age: number;
    img: String;
    mail: String;
    phone: String;
    location: String;
    description: String;

    constructor(name: String, age: number, img: String, mail: String, phone: String, location: String, description: String){
        this.name = name;
        this.age = age;
        this.img = img;
        this.mail = mail;
        this.phone = phone;
        this.location = location;
        this.description = description;
    }
}
