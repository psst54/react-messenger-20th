import CameraIcon from '@assets/CameraIcon';
import MicIcon from '@assets/MicIcon';
import PictureIcon from '@assets/PictureIcon';
import SearchIcon from '@assets/SearchIcon';
import SendIcon from '@assets/SendIcon';
import StickerIcon from '@assets/StickerIcon';
import { Message } from '@components/MessageList/MessageItem';
import { useState } from 'react';

function LeftSide({ isEmpty }: { isEmpty: boolean }) {
  return (
    <div className="relative w-[33px]">
      <button
        type="button"
        aria-label="Camera"
        className={`flex shrink-0 items-center justify-center
          w-[33px] h-[33px] bg-blue rounded-full
          transition-opacity transition-transform duration-300 ${
            isEmpty ? 'opacity-0 scale-110' : 'scale-100'
          }`}
      >
        <CameraIcon size="20px" />
      </button>
      <button
        type="button"
        aria-label="Search"
        className={`absolute top-0 flex shrink-0 items-center justify-center
          w-[33px] h-[33px] bg-white rounded-full
          transition-opacity transition-transform 
          duration-300 ${
            isEmpty ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
      >
        <SearchIcon size="20px" />
      </button>
    </div>
  );
}

function RightSide({ isEmpty }: { isEmpty: boolean }) {
  return (
    <div className="flex shrink-0">
      <div
        className={`flex gap-[12px] transition-transform duration-300 ${
          isEmpty ? 'hidden' : ''
        }`}
      >
        <button type="button" aria-label="Mic">
          <MicIcon size="24px" />
        </button>
        <button type="button" aria-label="Picture">
          <PictureIcon size="24px" />
        </button>
        <button type="button" aria-label="Sticker">
          <StickerIcon size="24px" />
        </button>
      </div>

      <button
        type="submit"
        aria-label="Search"
        className={`flex items-center justify-center
          w-[49px] h-[33px] bg-blue rounded-full
          transition-transform duration-300 ${
            isEmpty ? 'block scale-100' : 'hidden scale-110'
          }`}
      >
        <SendIcon size="24px" />
      </button>
    </div>
  );
}

export default function InputArea({
  addMessage,
  userId,
}: {
  addMessage: (message: Message) => void;
  userId: string;
}) {
  const [inputValue, setInputValue] = useState('');

  const paddingRight = inputValue ? 'pr-[5px]' : 'pr-[17px]';

  return (
    <div className="relative h-[27px]">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addMessage({
            id: new Date().toString(),
            sender: userId,
            content: inputValue,
            sentAt: new Date(),
          });
          setInputValue('');
        }}
        className={`absolute bottom-0
          flex gap-[8px]
          w-[347px]
          bg-blur_gray backdrop-blur-sm rounded-full
          mx-[14px] mb-[6px] pl-[5px] ${paddingRight} py-[4.5px]`}
      >
        <LeftSide isEmpty={!!inputValue} />
        <input
          placeholder="내용을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className=".body2 flex-1 w-0 bg-transparent outline-none"
        />
        <RightSide isEmpty={!!inputValue} />
      </form>
    </div>
  );
}
