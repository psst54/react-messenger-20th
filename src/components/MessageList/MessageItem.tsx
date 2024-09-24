export interface Message {
  id: string;
  sender: string;
  content: string;
  sentAt: Date;
}

const messageStyles = {
  default: 'body2 px-[12px] py-[8px] w-fit rounded-[18px]',
  myMessage: {
    default: 'bg-blue text-white rounded-r-[4px]',
    firstMessage: 'rounded-tr-[18px]',
    lastMessage: 'rounded-br-[18px]',
  },
  otherMessage: {
    default: 'bg-blue_gray rounded-l-[4px]',
    firstMessage: 'rounded-tl-[18px]',
    lastMessage: 'rounded-bl-[18px]',
  },
};

function getMarginTopOfMessage(isFirst: boolean) {
  if (isFirst) {
    return 'mt-[12px]';
  }
  return 'mt-[4px]';
}

function MyMessage({
  message,
  isFirst,
  isLast,
}: {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
}) {
  const styles = messageStyles.myMessage;

  return (
    <li
      className={`flex gap-[12px] justify-end
      ${getMarginTopOfMessage(isFirst)}`}
    >
      <p
        className={`${messageStyles.default}
        ${styles.default}
        ${isFirst ? styles.firstMessage : ''}
        ${isLast ? styles.lastMessage : ''}`}
      >
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
  const styles = messageStyles.otherMessage;

  return (
    <li
      className={`flex gap-[12px] items-end justify-start
        ${getMarginTopOfMessage(isFirst)}`}
    >
      <img
        src="profileCEOS.png"
        alt="profile"
        className={`${
          isLast ? '' : 'invisible'
        } w-[28px] h-[28px] border border-gray rounded-full`}
      />
      <p
        className={`${messageStyles.default}
        ${styles.default}
        ${isFirst ? styles.firstMessage : ''}
        ${isLast ? styles.lastMessage : ''}`}
      >
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
