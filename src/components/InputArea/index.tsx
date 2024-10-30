import {
  ChangeEvent,
  type FormEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import type { Message } from 'src/hooks/useMessage';

import RightButtonGroup from './RightButtonGroup';
import LeftButtonGroup from './LeftButtonGroup';
import DynamicTextarea from './DynamicTextarea';

const TEXT_AREA_HEIGHT = 42;
const MARGIN_HORIZONTAL = 14;

const formStyle = `absolute bottom-0
        flex items-center gap-8px
        min-h-42px
        bg-blur_gray backdrop-blur-sm
        mx-16px mb-6px pl-5px`;

export default function InputArea({
  addMessage,
  userId,
}: {
  addMessage: (message: Message) => void;
  userId: string;
}) {
  const [inputValue, setInputValue] = useState('');
  const isEmpty = !!inputValue;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const MIN_TEXTAREA_HEIGHT = '20px';

  const onSubmit = useCallback(
    (event: FormEvent) => {
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

      textarea.style.height = MIN_TEXTAREA_HEIGHT;
      setInputValue('');
    },
    [addMessage, inputValue, userId],
  );

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef?.current;
    if (!textarea) {
      return;
    }

    textarea.style.height = MIN_TEXTAREA_HEIGHT;
    textarea.style.height = `${textarea.scrollHeight}px`;
    setInputValue(e.target.value);
  }, []);

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
    <div className="relative h-27px">
      <form
        onSubmit={onSubmit}
        className={formStyle}
        style={{
          width: `calc(100% - ${MARGIN_HORIZONTAL * 2}px)`,
          borderRadius: `${TEXT_AREA_HEIGHT / 2}px`,
        }}
      >
        <LeftButtonGroup isEmpty={isEmpty} />
        <DynamicTextarea
          textareaRef={textareaRef}
          onChange={onChange}
          onKeyDown={onKeyDown}
          inputValue={inputValue}
        />
        <RightButtonGroup isEmpty={isEmpty} />
      </form>
    </div>
  );
}
