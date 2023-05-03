export class NewUser {
    username: string;
    email: string;
    password: string;
    authorities!: string[];

    constructor(username: string, email: string, password: string){
        this.username = username;
        this.email = email;
        this.password = password;
    }

}
