import { createContext } from 'react';
import { User } from 'src/types/user';

const UserContext = createContext<User | null>(null);

export default UserContext;
