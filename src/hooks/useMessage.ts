import { useState } from 'react';
import data from '@assets/messageData';

export interface Message {
  id: string;
  sender: string;
  content: string;
  sentAt: Date;
}

export default function useMessage() {
  const [messageList, setMessageList] = useState<Message[]>(data);
  console.log(messageList);

  function addMessage(message: Message) {
    setMessageList([...messageList, message]);
  }

  return { messageList, addMessage };
}
