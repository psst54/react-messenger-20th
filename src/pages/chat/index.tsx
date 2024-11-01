import { useCallback } from 'react';

import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';
import MessageList from '@components/MessageList';
import useUser from '@hooks/userUser';
import useMessage from '@hooks/useMessage';

export default function ChatPage() {
  const { messageList, addMessage, reactToMessage } = useMessage();
  const { user: currentUser, toggleUser: toggleCurrentUser } = useUser(0);
  const { user: otherUser, toggleUser: toggleOtherUser } = useUser(1);

  const onToggleUser = useCallback(() => {
    toggleCurrentUser();
    toggleOtherUser();
  }, [toggleCurrentUser, toggleOtherUser]);

  return (
    <>
      <NavBar otherUser={otherUser} onToggleUser={onToggleUser} />
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
