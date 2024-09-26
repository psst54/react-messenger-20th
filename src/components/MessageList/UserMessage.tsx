import { type Message } from 'src/hooks/useMessage';
import { User } from 'src/hooks/userUser';

const defaultMessageText = `body2
  w-fit max-w-w-message px-12px py-8px
  rounded-message-lg
  break-keep whitespace-pre-wrap`;

export default function UserMessage({
  userId,
  otherUser,
  message,
  isFirst,
  isLast,
}: {
  userId: string;
  otherUser: User;
  message: Message;
  isFirst: boolean;
  isLast: boolean;
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
      className={`flex gap-[12px] items-end
        ${isMyMessage ? 'justify-end' : 'justify-start'}
        ${isFirst ? 'mt-12px' : 'mt-4px'}`}
    >
      {!isMyMessage && (
        <img
          src={otherUser.profileImgUrl}
          alt={`${otherUser.name} profile`}
          className={`${isLast ? '' : 'invisible'}
          w-[28px] h-[28px] border border-gray rounded-full`}
        />
      )}
      <p
        className={`${defaultMessageText} ${isMyMessage ? myMessageStyle : otherMessageStyle}`}
      >
        {message.content}
      </p>
    </li>
  );
}
