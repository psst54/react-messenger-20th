import { useEffect, useRef } from 'react';

import { type Message } from 'src/hooks/useMessage';
import { type User } from 'src/hooks/userUser';

import ProfileCard from '@components/ProfileCard';
import MessageItem from './MessageItem';

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
    );
  }

  return (
    <ul className="no-scroll flex-col flex-1 h-full overflow-auto px-[14px] pb-[25px]">
      <li>
        <ProfileCard otherUser={otherUser} />
      </li>
      {messageList.map((message, messageIndex) => (
        <MessageItem
          key={message.id}
          userId={userId}
          message={message}
          isFirst={isFirst(messageIndex)}
          isLast={isLast(messageIndex)}
        />
      ))}
      <li ref={messageEndRef} />
    </ul>
  );
}
