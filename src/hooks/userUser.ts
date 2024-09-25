import { useState } from 'react';
import data from '@assets/userData';

export interface User {
  id: string;
  name: string;
}

export default function useUser() {
  // temporary index value
  // [todo] remove userIndex
  const [userIndex, setUserIndex] = useState<number>(0);
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
