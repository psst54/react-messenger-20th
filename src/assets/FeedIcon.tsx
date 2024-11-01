export default function FeedIcon({
  size,
  color,
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3.08875" width="5" height="5" rx="1" fill={color} />
      <rect x="10" y="3.08875" width="5" height="5" rx="1" fill={color} />
      <rect x="17" y="3.08875" width="5" height="5" rx="1" fill={color} />
      <rect x="3" y="10.0887" width="5" height="5" rx="1" fill={color} />
      <rect x="10" y="10.0887" width="5" height="5" rx="1" fill={color} />
      <rect x="17" y="10.0887" width="5" height="5" rx="1" fill={color} />
      <rect x="3" y="17.0887" width="5" height="5" rx="1" fill={color} />
      <rect x="10" y="17.0887" width="5" height="5" rx="1" fill={color} />
      <rect x="17" y="17.0887" width="5" height="5" rx="1" fill={color} />
    </svg>
  );
}

FeedIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
