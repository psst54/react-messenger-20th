import MicIcon from '@assets/MicIcon';
import PictureIcon from '@assets/PictureIcon';
import StickerIcon from '@assets/StickerIcon';
import SendIconFill from '@assets/SendIconFill';

const RIGHT_BUTTON_LIST = [
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

export default function RightButtonGroup({ isEmpty }: { isEmpty: boolean }) {
  return (
    <div className="flex shrink-0">
      <div className={`flex gap-12px mr-17px ${isEmpty ? 'hidden' : ''}`}>
        {RIGHT_BUTTON_LIST.map((button) => (
          <button key={button.label} type="button" aria-label={button.label}>
            <button.icon size="24px" />
          </button>
        ))}
      </div>

      <button
        type="submit"
        aria-label="Search"
        className={`flex items-center justify-center
            w-49px h-icon mr-5px bg-blue rounded-full ${
              isEmpty ? 'block' : 'hidden'
            }`}
      >
        <SendIconFill size="24px" color="#ffffff" />
      </button>
    </div>
  );
}
