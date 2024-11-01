import { useState } from 'react';
import { EmojiReaction, Message } from 'src/types/message';

export default function useMessage(initialMessageList: Message[]) {
  const [messageList, setMessageList] = useState<Message[]>(initialMessageList);

  function addMessage(message: Message) {
    setMessageList([...messageList, message]);
  }

  // [todo] add comments
  function reactToMessage(messageId: string, reactor: string, emoji: string) {
    setMessageList(
      messageList.map((message) => {
        if (message.id !== messageId) {
          return message;
        }

        if (message.sender === reactor) {
          return message;
        }

        const reactionIndex = message.reactionList?.findIndex(
          (reaction: EmojiReaction) => reaction.emoji === emoji,
        );

        if (reactionIndex !== undefined && reactionIndex !== -1) {
          const existingReaction = message.reactionList![reactionIndex];

          const userIdIndex = existingReaction.userIdList.indexOf(reactor);
          if (userIdIndex !== -1) {
            existingReaction.userIdList.splice(userIdIndex, 1);

            if (existingReaction.userIdList.length === 0) {
              return {
                ...message,
                reactionList: [
                  ...message.reactionList!.slice(0, reactionIndex),
                  ...message.reactionList!.slice(reactionIndex + 1),
                ],
              };
            }
          }
        } else {
          const newReaction: EmojiReaction = {
            emoji,
            userIdList: [reactor],
          };

          return {
            ...message,
            reactionList: [...(message.reactionList || []), newReaction],
          };
        }

        return message;
      }),
    );
  }

  return { messageList, addMessage, reactToMessage };
}
