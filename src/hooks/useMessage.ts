import { useState } from 'react';
import { Message } from '@components/MessageList/MessageItem';
import data from '@assets/messageList';

export default function useMessage() {
  const [messageList, setMessageList] = useState<Message[]>(data);

  function addMessage(message: Message) {
    setMessageList([...messageList, message]);
  }

  return { messageList, addMessage };
}
