import { useCallback } from 'react';

import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useUser from './hooks/userUser';
import useMessage from './hooks/useMessage';

function App() {
  const { messageList, addMessage } = useMessage();
  const { user: currentUser, toggleUser: toggleCurrentUser } = useUser(0);
  const { user: otherUser, toggleUser: toggleOtherUser } = useUser(1);

  const onToggleUser = useCallback(() => {
    toggleCurrentUser();
    toggleOtherUser();
  }, [toggleCurrentUser, toggleOtherUser]);

  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-blue_gray">
      <div
        className="flex flex-col w-[375px] h-[812px]
        bg-white rounded-3xl shadow-2xl"
      >
        <NavBar otherUser={otherUser} onToggleUser={onToggleUser} />
        <MessageList messageList={messageList} userId={currentUser.id} />
        <InputArea addMessage={addMessage} userId={currentUser.id} />
      </div>
    </div>
  );
}

export default App;
