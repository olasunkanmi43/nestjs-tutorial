import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'olasunkanmi',
            password: 'okeowo'
        },
        {
            username: 'tunji',
            password: 'fagade'
        },
        {
            username: 'akeem',
            password: 'adeoti'
        },
        {
            username: 'olapeju',
            password: 'okeowo'
        },
    ];

    getUsers() {
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user)=> user.username ===
        username);
    }
}
