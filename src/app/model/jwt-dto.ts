export class JwtDto {
    token!: string;
    type!: string;
    username!: string;
    password!: string;
    authorities!: string[];
}
