import { SerializedUser, User } from 'src/users/types';
export declare class UsersService {
    private users;
    getUsers(): SerializedUser[];
    getUserByUsername(username: string): User;
}
