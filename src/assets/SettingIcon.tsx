export default function SettingIcon({
  size = '1rem',
  color = '#000000',
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.173"
        y1="5.36539"
        x2="21.673"
        y2="5.36539"
        stroke={color}
        strokeWidth="1.73077"
        strokeLinecap="round"
      />
      <line
        x1="4.173"
        y1="12.0962"
        x2="21.673"
        y2="12.0962"
        stroke={color}
        strokeWidth="1.73077"
        strokeLinecap="round"
      />
      <line
        x1="4.173"
        y1="18.8269"
        x2="21.673"
        y2="18.8269"
        stroke={color}
        strokeWidth="1.73077"
        strokeLinecap="round"
      />
    </svg>
  );
}

SettingIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
