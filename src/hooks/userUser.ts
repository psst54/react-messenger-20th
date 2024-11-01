import { useState } from 'react';
import data from '@assets/userData';
import { type User } from 'src/types/user';

// [todo] remove index
export default function useUser(index: number) {
  // temporary index value
  // [todo] remove userIndex
  const [userIndex, setUserIndex] = useState<number>(index);
  const [user, setUser] = useState<User>(data[userIndex]);

  /**
   * change user to next user of list
   */
  function toggleUser() {
    const newUserIndex = (userIndex + 1) % data.length;

    setUserIndex(newUserIndex);
    setUser(data[newUserIndex]);
  }

  return { user, toggleUser };
}
