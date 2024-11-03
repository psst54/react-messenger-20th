import initialChatData from '@assets/chatData';
import { useState } from 'react';
import { EmojiReaction, Message } from 'src/types/message';

function getMessageDataFromStorage(chatId: string) {
  const storageData = localStorage.getItem(chatId);
  if (storageData) {
    return JSON.parse(storageData);
  }

  const chatData = initialChatData.find((datum) => datum.id === chatId);
  if (!chatData) {
    localStorage.setItem(chatId, JSON.stringify([]));
    return [];
  }
  localStorage.setItem(chatId, JSON.stringify(chatData.messageList));
  return chatData.messageList;
}

export default function useMessage(initialChatId: string) {
  const [chatId] = useState(initialChatId);
  const [messageList, setMessageList] = useState<Message[]>(
    getMessageDataFromStorage(chatId),
  );

  function addMessage(message: Message) {
    localStorage.setItem(chatId, JSON.stringify([...messageList, message]));
    setMessageList([...messageList, message]);
  }

  // [todo] add comments
  function reactToMessage(messageId: string, reactor: string, emoji: string) {
    const newMessageList = messageList.map((message) => {
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
    });

    localStorage.setItem(chatId, JSON.stringify(newMessageList));
    setMessageList(newMessageList);
  }

  return { messageList, addMessage, reactToMessage };
}
