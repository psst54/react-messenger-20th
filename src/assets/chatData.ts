import { Chat } from 'src/types/chat';
import { messageList1, messageList2, messageList3 } from './messageData';
import { user1, user2, user3, user4 } from './userData';

const data: Chat[] = [
  {
    id: '1',
    userList: [user1, user2],
    messageList: messageList1,
  },
  {
    id: '2',
    userList: [user1, user3],
    messageList: messageList2,
  },
  {
    id: '3',
    userList: [user1, user4],
    messageList: messageList3,
  },
];

export default data;
