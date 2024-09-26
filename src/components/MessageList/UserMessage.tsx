import { EmojiReaction, type Message } from 'src/hooks/useMessage';
import { User } from 'src/hooks/userUser';

const defaultMessageText = `
  relative
  body2
  w-fit max-w-256px px-12px py-8px
  rounded-message-lg
  break-keep whitespace-pre-wrap`;

export default function UserMessage({
  userId,
  otherUser,
  message,
  isFirst,
  isLast,
  reactToMessage,
}: {
  userId: string;
  otherUser: User;
  message: Message;
  isFirst: boolean;
  isLast: boolean;
  reactToMessage: any;
}) {
  const isMyMessage = userId === message.sender;

  const myMessageStyle = `bg-blue text-white rounded-r-message-sm
  ${isFirst ? 'rounded-tr-message-lg' : ''}
  ${isLast ? 'rounded-br-message-lg' : ''}`;

  const otherMessageStyle = `bg-blue_gray rounded-l-message-sm
  ${isFirst ? 'rounded-tl-message-lg' : ''} 
  ${isLast ? 'rounded-bl-message-lg' : ''}`;

  return (
    <li
      className={`flex gap-12px items-end
        ${isMyMessage ? 'justify-end' : 'justify-start'}
        ${isFirst ? 'mt-12px' : 'mt-4px'}`}
    >
      {!isMyMessage && (
        <img
          src={otherUser.profileImgUrl}
          alt={`${otherUser.name} profile`}
          className={`${isLast ? '' : 'invisible'}
            w-28px h-28px border border-gray rounded-full`}
        />
      )}
      <p
        className={`${defaultMessageText}
          ${isMyMessage ? myMessageStyle : otherMessageStyle}
          ${message?.reactionList?.length && 'mb-16px'}`}
        onDoubleClick={() => reactToMessage(message.id, userId, '💖')}
      >
        {message.content}
        {!!message?.reactionList?.length && (
          <span
            className={`absolute
              left-4px -bottom-24px
              p-2px bg-blue_gray
              border-4 border-white rounded-full`}
          >
            {message.reactionList.map(
              (reaction: EmojiReaction) => reaction.emoji,
            )}
          </span>
        )}
      </p>
    </li>
  );
}
