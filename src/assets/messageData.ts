import { Message } from 'src/hooks/useMessage';

import userData from '@assets/userData';

const data: Message[] = [
  {
    id: '1',
    sender: userData[0].id,
    content: '이번주 디자인 스터디 과제는 메신저 서비스 리디자인하기입니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: userData[1].id,
    content: '스터디 장소가 어디인가요?',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '3',
    sender: userData[0].id,
    content: '저번주와 동일합니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: userData[0].id,
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: userData[1].id,
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: userData[1].id,
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: userData[1].id,
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  },
];

export default data;
