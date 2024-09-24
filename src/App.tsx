import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useMessage from './hooks/useMessage';

function App() {
  const { messageList, addMessage } = useMessage();
  const userId = 'b';

  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-blue_gray">
      <div className="flex flex-col w-[375px] h-[812px]
        bg-white rounded-3xl shadow-2xl"
      >
        <NavBar />
        <MessageList messageList={messageList} userId={userId} />
        <InputArea addMessage={addMessage} userId={userId} />
      </div>
    </div>
  );
}

export default App;
