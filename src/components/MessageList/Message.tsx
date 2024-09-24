export interface Message {
  id: string;
  sender: string;
  content: string;
  sentAt: Date;
}

export default function MessageItem({
  userId,
  message,
}: {
  userId: string;
  message: Message;
}) {
  const isMyMessage = userId === message.sender;
  const myMessageStyle = 'bg-blue text-white';
  const otherMessageStyle = 'bg-blue_gray';

  return (
    <li className={`flex justify-${isMyMessage ? 'end' : 'start'}`}>
      <p
        className={`body2 px-[12px] py-[8px] w-fit rounded-[18px]
          ${isMyMessage ? myMessageStyle : otherMessageStyle}`}
      >
        {message.content}
      </p>
    </li>
  );
}
