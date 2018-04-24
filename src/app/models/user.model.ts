export class item {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    avatar: string;

    constructor(name, lastName, email, phoneNumber, avatar){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.avatar = avatar;
    }
}
