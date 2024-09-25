import { useState } from 'react';
import data from '@assets/messageList';

export interface Message {
  id: string;
  sender: string;
  content: string;
  sentAt: Date;
}

export default function useMessage() {
  const [messageList, setMessageList] = useState<Message[]>(data);

  function addMessage(message: Message) {
    setMessageList([...messageList, message]);
  }

  return { messageList, addMessage };
}
