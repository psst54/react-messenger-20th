import { useCallback } from 'react';

import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useUser from '@hooks/userUser';
import useMessage from '@hooks/useMessage';

export default function MainPage() {
  const { messageList, addMessage, reactToMessage } = useMessage();
  const { user: currentUser, toggleUser: toggleCurrentUser } = useUser(0);
  const { user: otherUser, toggleUser: toggleOtherUser } = useUser(1);

  const onToggleUser = useCallback(() => {
    toggleCurrentUser();
    toggleOtherUser();
  }, [toggleCurrentUser, toggleOtherUser]);

  return (
    <div className="flex items-center justify-center w-dvw h-dvh h-screen bg-blue_gray">
      <div
        className="flex flex-col
        w-dvw h-dvh h-screen bg-white
        sm:w-375px sm:max-h-812px sm:rounded-3xl sm:shadow-2xl"
      >
        <NavBar otherUser={otherUser} onToggleUser={onToggleUser} />
        <MessageList
          messageList={messageList}
          userId={currentUser.id}
          otherUser={otherUser}
          reactToMessage={reactToMessage}
        />
        <InputArea addMessage={addMessage} userId={currentUser.id} />
      </div>
    </div>
  );
}
