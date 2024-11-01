import { useState } from 'react';
import { user1, user2 } from '@assets/userData';
import { type User } from 'src/types/user';

// [todo] remove index
export default function useUser() {
  const [user, setUser] = useState<User>(user1);

  /**
   * change user to next user of list
   */
  function toggleUser() {
    setUser(user2);
  }

  return { user, toggleUser };
}
