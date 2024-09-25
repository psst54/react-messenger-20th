import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useMessage from './hooks/useMessage';
import useUser from './hooks/userUser';

function App() {
  const { messageList, addMessage } = useMessage();
  const { user, toggleUser } = useUser();

  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-blue_gray">
      <div
        className="flex flex-col w-[375px] h-[812px]
        bg-white rounded-3xl shadow-2xl"
      >
        <NavBar toggleUser={toggleUser} />
        <MessageList messageList={messageList} userId={user.id} />
        <InputArea addMessage={addMessage} userId={user.id} />
      </div>
    </div>
  );
}

export default App;
