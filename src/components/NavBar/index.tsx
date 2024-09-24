import BackIcon from '@assets/BackIcon';
import PhoneIcon from '@assets/PhoneIcon';
import VideoIcon from '@assets/VideoIcon';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full h-[55px] px-3.5 border-b border-colors-blue_gray">
      <div className="flex items-center gap-[15px]">
        <BackIcon size="24px" />
        <div className="flex gap-[10px]">
          <img
            src="/profileCEOS.png"
            alt="user profile"
            className="w-[33px] h-[33px] rounded-full"
          />
          <div className="flex-col">
            <p className="body1">ceos.sinchon</p>
            <p className="body5 color-red">CEOS</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[18px]">
        <PhoneIcon size="30px" />
        <VideoIcon size="30px" />
      </div>
    </nav>
  );
}
