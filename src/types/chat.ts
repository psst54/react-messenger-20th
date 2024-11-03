import { Message } from './message';
import { User } from './user';

export interface Chat {
  id: string;
  userList: User[];
  messageList: Message[];
}
