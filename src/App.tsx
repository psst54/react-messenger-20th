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
        className="flex flex-col
        w-full h-full bg-white
        sm:w-[375px] sm:h-[812px] sm:rounded-3xl sm:shadow-2xl"
      >
        <NavBar otherUser={otherUser} onToggleUser={onToggleUser} />
        <MessageList
          messageList={messageList}
          userId={currentUser.id}
          otherUser={otherUser}
        />
        <InputArea addMessage={addMessage} userId={currentUser.id} />
      </div>
    </div>
  );
}

export default App;
