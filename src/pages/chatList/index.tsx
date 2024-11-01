import BackIcon from '@assets/BackIcon';
import chatListdata from '@assets/chatData';
import SeacrhBar from '@components/SearchBar';
import { useContext } from 'react';
import UserContext from 'src/contexts/userContext';
import { Chat } from 'src/types/chat';

function Header() {
  return (
    <header className="flex items-center gap-4px px-14px mt-14px">
      <BackIcon size="24px" />
      <p className="title1">_uiqnh</p>
    </header>
  );
}

function Title() {
  return (
    <div className="flex items-center justify-between px-14px py-16px">
      <p className="title2">메시지</p>
      <p className="body4">요청</p>
    </div>
  );
}

function ChatItem({ data }: { data: Chat }) {
  const { userList, messageList } = data;
  const myData = useContext(UserContext);
  const otherData = userList.find((user) => user.id !== myData?.id);

  if (!otherData) {
    return <div>error</div>;
  }
  return (
    <div className="flex items-center gap-10px py-8px">
      <img
        src={otherData.profileImgUrl}
        alt={otherData.name}
        className="w-54px h-54px border border-blue_gray rounded-full"
      />
      <div>
        <p className="body2">{otherData.id}</p>
        <p className="body2">{messageList[messageList.length - 1].content}</p>
      </div>
    </div>
  );
}

function ChatList() {
  return (
    <ul className="px-14px">
      {chatListdata.map((item) => (
        <ChatItem key={item.id} data={item} />
      ))}
    </ul>
  );
}

export default function ChatListPage() {
  return (
    <div>
      <Header />
      <SeacrhBar />
      <Title />
      <ChatList />
    </div>
  );
}
