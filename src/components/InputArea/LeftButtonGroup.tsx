import CameraIcon from '@assets/CameraIcon';
import SearchIcon from '@assets/SearchIcon';
import ChangeableButton from './ChangeableButton';

const buttonStyle = `flex shrink-0 items-center justify-center
    w-icon h-icon rounded-full
    transition-opacity transition-transform duration-300`;

const primaryButton = {
  label: 'Camera',
  icon: CameraIcon,
  style: `${buttonStyle} bg-blue`,
};

const secondaryButton = {
  label: 'Camera',
  icon: SearchIcon,
  style: `${buttonStyle} absolute top-0 bg-white`,
};

export default function LeftButtonGroup({ isEmpty }: { isEmpty: boolean }) {
  return (
    <ChangeableButton
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      isActive={isEmpty}
    />
  );
}
