import { type Message } from 'src/hooks/useMessage';

const defaultMessageText = 'body2 px-[12px] py-[8px] w-fit max-w-[256px] rounded-[18px] break-keep';

function MyMessage({
  message,
  isFirst,
  isLast,
}: {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
}) {
  const myMessageStyle = `bg-blue text-white rounded-r-[4px] 
  ${isFirst ? 'rounded-tr-[18px]' : ''} 
  ${isLast ? 'rounded-br-[18px]' : ''}`;

  return (
    <li className={`flex gap-[12px] justify-end ${isFirst ? 'mt-3' : 'mt-1'}`}>
      <p className={`${defaultMessageText} ${myMessageStyle}`}>
        {message.content}
      </p>
    </li>
  );
}

function OtherMessage({
  message,
  isFirst,
  isLast,
}: {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
}) {
  const otherMessageStyle = `bg-blue_gray rounded-l-[4px] 
  ${isFirst ? 'rounded-tl-[18px]' : ''} 
  ${isLast ? 'rounded-bl-[18px]' : ''}`;

  return (
    <li
      className={`flex gap-[12px] items-end justify-start ${
        isFirst ? 'mt-3' : 'mt-1'
      }`}
    >
      <img
        src="profileCEOS.png"
        alt="profile"
        className={`${
          isLast ? '' : 'invisible'
        } w-[28px] h-[28px] border border-gray rounded-full`}
      />
      <p className={`${defaultMessageText} ${otherMessageStyle}`}>
        {message.content}
      </p>
    </li>
  );
}

export default function MessageItem({
  userId,
  message,
  isFirst,
  isLast,
}: {
  userId: string;
  message: Message;
  isFirst: boolean;
  isLast: boolean;
}) {
  const isMyMessage = userId === message.sender;

  return isMyMessage ? (
    <MyMessage message={message} isFirst={isFirst} isLast={isLast} />
  ) : (
    <OtherMessage message={message} isFirst={isFirst} isLast={isLast} />
  );
}
