import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useUser from '@hooks/userUser';
import useMessage from '@hooks/useMessage';

export default function ChatPage() {
  const { messageList, addMessage, reactToMessage } = useMessage();
  const { user: currentUser } = useUser();
  const { user: otherUser } = useUser();

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
