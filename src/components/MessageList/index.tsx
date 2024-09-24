import { useEffect, useRef } from 'react';
import MessageItem, { Message } from './MessageItem';

export default function MessageList({
  messageList,
  userId,
}: {
  messageList: Message[];
  userId: string;
}) {
  const messagesEndRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messageList]);

  function isFirst(index: number) {
    return (
      index === 0 || messageList[index - 1].sender !== messageList[index].sender
    );
  }

  function isLast(index: number) {
    return (
      index === messageList.length - 1
      || messageList[index].sender !== messageList[index + 1].sender
    );
  }

  return (
    <ul className="flex-col flex-1 h-full overflow-auto px-[14px] pb-[25px]">
      {messageList.map((message, messageIndex) => (
        <MessageItem
          key={message.id}
          userId={userId}
          message={message}
          isFirst={isFirst(messageIndex)}
          isLast={isLast(messageIndex)}
        />
      ))}
      <li ref={messagesEndRef} />
    </ul>
  );
}
