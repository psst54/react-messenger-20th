import { Message } from 'src/types/message';
import { user1, user2, user4 } from './userData';

export const messageList1: Message[] = [
  {
    id: '1',
    sender: user2.id,
    content: '이렇게 멋진 파란 하늘 위로',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: user2.id,
    content: '나르는 마법 융단을 타고',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '3',
    sender: user2.id,
    content: '이렇게 멋진',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: user2.id,
    content: '푸른 세상 속을 나르는 우리',
    sentAt: new Date(2024, 8, 24),
    reactionList: [{ emoji: '💖', userIdList: [user1.id] }],
  },
  {
    id: '5',
    sender: user2.id,
    content: '두 사람',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: user1.id,
    content: '신경 쓰지 마요, 그렇고 그런 얘기들',
    sentAt: new Date(2024, 8, 24),
    reactionList: [{ emoji: '💖', userIdList: [user2.id] }],
  },
  {
    id: '7',
    sender: user1.id,
    content: '골치 아픈일은 내일로',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '8',
    sender: user1.id,
    content: '미뤄버려요',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '9',
    sender: user2.id,
    content: '인생은 한 번 뿐, 후회하지마요',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '10',
    sender: user2.id,
    content: '진짜로 가지고 싶은 걸 가져요',
    sentAt: new Date(2024, 8, 24),
  },
];

export const messageList2: Message[] = [
  {
    id: '1',
    sender: user1.id,
    content: '이렇게 멋진 파란 하늘 위로',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: user1.id,
    content: '나르는 마법 융단을 타고',
    sentAt: new Date(2024, 8, 24),
  },
];

export const messageList3: Message[] = [
  {
    id: '1',
    sender: user4.id,
    content: '이렇게 멋진 파란 하늘 위로',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: user4.id,
    content: '나르는 마법 융단을 타고',
    sentAt: new Date(2024, 8, 24),
  },
];
