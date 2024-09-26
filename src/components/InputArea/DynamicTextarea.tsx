import { ChangeEvent, KeyboardEvent, MutableRefObject } from 'react';

const FLEXIBLE_WIDTH = 'flex-1 w-0'; // Adjust width to take up as much horizontal space as possible
const HEIGHT = 'h-[20px] max-h-[124px]';

const textareaStyle = `body3
  ${FLEXIBLE_WIDTH} ${HEIGHT} bg-transparent
  outline-none overflow-auto resize-none`;

export default function DynamicTextarea({
  textareaRef,
  onChange,
  onKeyDown,
  inputValue,
}: {
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
}) {
  return (
    <textarea
      ref={textareaRef}
      placeholder="내용을 입력하세요"
      value={inputValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={textareaStyle}
    />
  );
}
