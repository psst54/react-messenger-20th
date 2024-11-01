import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';

import useMessage from '@hooks/useMessage';

import UserContext from 'src/contexts/userContext';
import chatListData from '@assets/chatData';

export default function ChatPage() {
  const { id } = useParams();
  const chatData = chatListData.find((chat) => chat.id === id);
  const currentUser = useContext(UserContext);
  const otherUser = chatData?.userList.find(
    (user) => user.id !== currentUser?.id,
  );

  const { messageList, addMessage, reactToMessage } = useMessage(
    chatData?.messageList || [],
  );

  if (!currentUser || !otherUser) {
    return <div>error</div>;
  }

  return (
    <>
      <NavBar otherUser={otherUser} />
      <MessageList
        messageList={messageList}
        userId={currentUser.id}
        otherUser={otherUser}
        reactToMessage={reactToMessage}
      />
      <InputArea addMessage={addMessage} userId={currentUser.id} />
    </>
  );
}
