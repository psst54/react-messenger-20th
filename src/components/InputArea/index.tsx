import {
  type FormEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import { type Message } from 'src/hooks/useMessage';

import CameraIcon from '@assets/CameraIcon';
import MicIcon from '@assets/MicIcon';
import PictureIcon from '@assets/PictureIcon';
import SearchIcon from '@assets/SearchIcon';
import SendIcon from '@assets/SendIcon';
import StickerIcon from '@assets/StickerIcon';
import DynamicTextarea from './DynamicTextarea';

const RIGHT_BUTTON_LIST: any[] = [
  {
    label: 'Mic',
    icon: MicIcon,
  },
  {
    label: 'Picture',
    icon: PictureIcon,
  },
  {
    label: 'Sticker',
    icon: StickerIcon,
  },
];

function LeftSideButton({ isEmpty }: { isEmpty: boolean }) {
  const ICON_SIZE = '33px';

  return (
    <div className="relative w-[33px]">
      <button
        type="button"
        aria-label="Camera"
        className={`flex shrink-0 items-center justify-center
          w-[${ICON_SIZE}] h-[${ICON_SIZE}] bg-blue rounded-full
          transition-opacity transition-transform duration-300
          ${isEmpty ? 'opacity-0 scale-110' : 'scale-100'}`}
      >
        <CameraIcon size="20px" />
      </button>
      <button
        type="button"
        aria-label="Search"
        className={`absolute top-0 flex shrink-0 items-center justify-center
          w-[${ICON_SIZE}] h-[${ICON_SIZE}] bg-white rounded-full
          transition-opacity transition-transform duration-300
          ${isEmpty ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
      >
        <SearchIcon size="20px" />
      </button>
    </div>
  );
}

function RightSideButton({ isEmpty }: { isEmpty: boolean }) {
  const ICON_SIZE = '24px';

  return (
    <div className="flex shrink-0">
      <div
        className={`flex gap-[12px] transition-transform duration-300 ${
          isEmpty ? 'hidden' : ''
        }`}
      >
        {RIGHT_BUTTON_LIST.map((button) => (
          <button type="button" aria-label={button.label}>
            <button.icon size={ICON_SIZE} />
          </button>
        ))}
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
  const isEmpty = !!inputValue;
  const paddingRight = isEmpty ? 'pr-[17px]' : 'pr-[5px]';
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    const textarea = textareaRef?.current;
    if (!textarea) {
      return;
    }

    addMessage({
      id: new Date().toString(), // [todo] find better way
      sender: userId,
      content: inputValue,
      sentAt: new Date(),
    });

    textarea.style.height = '24px'; // [todo] add min height to constant list
    setInputValue('');
  }

  const onChange = useCallback(
    (e: any) => {
      const textarea = textareaRef?.current;
      if (!textarea) {
        return;
      }

      textarea.style.height = '24px'; // [todo] add min height to constant list
      textarea.style.height = `${textarea.scrollHeight}px`;
      setInputValue(e.target.value);
    },
    [inputValue],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      const isEnterWithoutShift = event.key === 'Enter' && !event.shiftKey;
      if (isEnterWithoutShift) {
        event.preventDefault();
        onSubmit(event);
      }
    },
    [onSubmit],
  );

  return (
    <div className="relative h-[27px]">
      <form
        onSubmit={onSubmit}
        // [todo] margin 상수화하기
        className={`absolute bottom-0
          flex items-center gap-[8px]
          w-[calc(100%-28px)]
          bg-blur_gray backdrop-blur-sm rounded-[20px]
          mx-[14px] mb-[6px] pl-[5px] ${paddingRight} py-[4.5px]`}
      >
        <LeftSideButton isEmpty={isEmpty} />
        <DynamicTextarea
          textareaRef={textareaRef}
          onChange={onChange}
          onKeyDown={onKeyDown}
          inputValue={inputValue}
        />
        <RightSideButton isEmpty={isEmpty} />
      </form>
    </div>
  );
}
