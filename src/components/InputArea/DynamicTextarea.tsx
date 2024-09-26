import { MutableRefObject } from 'react';

export default function DynamicTextarea({
  textareaRef,
  onSubmit,
  onChange,
  inputValue,
}: {
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
  onSubmit: any;
  onChange: any;
  inputValue: string;
}) {
  return (
    <textarea
      ref={textareaRef}
      placeholder="내용을 입력하세요"
      value={inputValue}
      onKeyDown={(e) => {
        // handle shift + enter
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          onSubmit(e);
        }
      }}
      onChange={onChange}
      className=".body2 flex-1 w-0 h-[24px] max-h-[124px] bg-transparent outline-none overflow-auto resize-none"
    />
  );
}
