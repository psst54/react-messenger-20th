import BackIcon from '@assets/BackIcon';
import PhoneIcon from '@assets/PhoneIcon';
import VideoIcon from '@assets/VideoIcon';
import { User } from 'src/hooks/userUser';

export default function NavBar({
  otherUser,
  onToggleUser,
}: {
  otherUser: User;
  onToggleUser: () => void;
}) {
  return (
    <nav
      className="flex items-center justify-between
      w-full h-[55px] px-3.5
      border-b border-colors-blue_gray"
    >
      <div className="flex items-center gap-[15px]">
        <BackIcon size="24px" />
        <div className="flex gap-[10px]">
          <button type="button" onClick={onToggleUser}>
            <img
              src={otherUser.profileImgUrl}
              alt="user profile"
              className="w-[33px] h-[33px] rounded-full"
            />
          </button>
          <div className="flex-col">
            <p className="body1">{otherUser.name}</p>
            <p className="body5 color-red">{otherUser.id}</p>
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
