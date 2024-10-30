import { useEffect, useRef } from 'react';

import { type Message } from 'src/hooks/useMessage';
import { type User } from 'src/hooks/userUser';

import ProfileCard from '@components/ProfileCard';
import formatDate from 'src/utils/formatDate';
import UserMessage from './UserMessage';
import SystemMessage from './SystemMessage';

export default function MessageList({
  messageList,
  userId,
  otherUser,
  reactToMessage,
}: {
  messageList: Message[];
  userId: string;
  otherUser: User;
  reactToMessage: (messageId: string, reactor: string, emoji: string) => void;
}) {
  const messageEndRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messageList.length]);

  function isDifferentDate(a: Date, b: Date) {
    return a.toDateString() !== b.toDateString();
  }

  function isStartOfDate(index: number) {
    const prevMessage = messageList[index - 1];
    const currentMessage = messageList[index];

    return (
      index === 0 || isDifferentDate(prevMessage.sentAt, currentMessage.sentAt)
    );
  }

  /**
   * Checks if the message at the given index is the first message
   * in the message list or if the sender changes
   *
   * @param index - Index of the target message
   * @returns True if it's the first message or the moment when sender changes, otherwise false
   */
  function isFirst(index: number) {
    const prevMessage = messageList[index - 1];
    const currentMessage = messageList[index];

    return (
      index === 0 || // first message in total
      prevMessage.sender !== currentMessage.sender || // When the sender changes
      isDifferentDate(prevMessage.sentAt, currentMessage.sentAt) || // When the date changes
      !!prevMessage?.reactionList?.length
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
    const currentMessage = messageList[index];
    const nextMessage = messageList[index + 1];

    return (
      index === messageList.length - 1 || // last message in total
      currentMessage.sender !== nextMessage.sender || // When the sender changes
      isDifferentDate(currentMessage.sentAt, nextMessage.sentAt) || // When the date changes
      !!currentMessage?.reactionList?.length
    );
  }

  return (
    <ul
      className="no-scroll flex-col flex-1
        h-full px-14px pb-25px
        overflow-auto"
    >
      <li>
        <ProfileCard otherUser={otherUser} />
      </li>
      {messageList.map((message, messageIndex) => (
        <div key={message.id}>
          {isStartOfDate(messageIndex) && (
            <SystemMessage content={formatDate(message.sentAt)} />
          )}
          <UserMessage
            userId={userId}
            otherUser={otherUser}
            message={message}
            isFirst={isFirst(messageIndex)}
            isLast={isLast(messageIndex)}
            reactToMessage={reactToMessage}
          />
        </div>
      ))}
      <li ref={messageEndRef} />
    </ul>
  );
}
