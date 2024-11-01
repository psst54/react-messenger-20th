export default function AddIcon({
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
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2.5"
        width="20"
        height="20"
        rx="4.80769"
        stroke={color}
        strokeWidth="1.8"
      />
      <line
        x1="12.1"
        y1="7.4"
        x2="12.1"
        y2="17.6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="6.9"
        y1="12.3"
        x2="17.1"
        y2="12.3"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

AddIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
