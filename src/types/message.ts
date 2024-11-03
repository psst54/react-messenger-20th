export interface EmojiReaction {
  emoji: string;
  userIdList: string[];
}

export interface Message {
  id: string;
  sender: string;
  content: string;
  sentAt: Date;
  reactionList?: EmojiReaction[];
}
