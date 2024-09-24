import CameraIcon from '@assets/CameraIcon';
import MicIcon from '@assets/MicIcon';
import PictureIcon from '@assets/PictureIcon';
import StickerIcon from '@assets/StickerIcon';

export default function InputArea() {
  return (
    <div className="relative h-[27px]">
      <form className="absolute bottom-0 backdrop-blur-sm flex gap-[8px] bg-blur_gray rounded-full mx-[14px] mb-[6px] pl-[5px] pr-[17px] py-[4.5px]">
        <button
          type="button"
          aria-label="Camera"
          className="flex shrink-0 items-center justify-center w-[33px] h-[33px] bg-blue rounded-full"
        >
          <CameraIcon size="20px" />
        </button>
        <input
          placeholder="내용을 입력하세요"
          className=".body2 w-full bg-transparent outline-none"
        />

        <div className="flex gap-[12px]">
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
      </form>
    </div>
  );
}
