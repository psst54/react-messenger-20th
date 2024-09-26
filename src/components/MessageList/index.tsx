import { useEffect, useRef } from 'react';

import { type Message } from 'src/hooks/useMessage';
import { type User } from 'src/hooks/userUser';

import ProfileCard from '@components/ProfileCard';
import MessageItem from './MessageItem';
import SystemMessage from './SystemMessage';

function formatDate(date:Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function MessageList({
  messageList,
  userId,
  otherUser,
}: {
  messageList: Message[];
  userId: string;
  otherUser: User;
}) {
  const messageEndRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messageList]);

  function isFirstOfDate(index:number) {
    return index === 0 || messageList[index - 1].sentAt.toDateString()
    !== messageList[index].sentAt.toDateString();
  }

  /**
   * Checks if the message at the given index is the first message
   * in the message list or if the sender changes
   *
   * @param index - Index of the target message
   * @returns True if it's the first message or the moment when sender changes, otherwise false
   */
  function isFirst(index: number) {
    return (
      index === 0 // first message in total
      || messageList[index - 1].sender !== messageList[index].sender // When the sender changes
      || messageList[index - 1].sentAt.toDateString()
        !== messageList[index].sentAt.toDateString() // When the date changes
    );
  }

  /**
   * Checks if the message at the given index is the last message
   * in the message list or if the sender changes
   *
   * @param index - Index of the target message
   * @returns True if it's the last message or the moment when changes, otherwise false
   */
  function isLast(index: number) {
    return (
      index === messageList.length - 1 // last message in total
      || messageList[index].sender !== messageList[index + 1].sender // When the sender changes
      || messageList[index].sentAt.toDateString()
        !== messageList[index + 1].sentAt.toDateString() // When the date changes
    );
  }

  return (
    <ul className="no-scroll flex-col flex-1
      h-full px-[14px] pb-[25px]
      overflow-auto"
    >
      <li>
        <ProfileCard otherUser={otherUser} />
      </li>
      {messageList.map((message, messageIndex) => (
        <>
          {isFirstOfDate(messageIndex) && <SystemMessage content={formatDate(message.sentAt)} />}
          <MessageItem
            key={message.id}
            userId={userId}
            message={message}
            isFirst={isFirst(messageIndex)}
            isLast={isLast(messageIndex)}
          />
        </>
      ))}
      <li ref={messageEndRef} />
    </ul>
  );
}
