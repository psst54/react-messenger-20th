export default function SearchIcon({
  size = '1rem',
  color = '#3363ED',
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.72549"
        cy="8.81778"
        r="6.32852"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M18.4968 18.5891L13.6111 13.7034"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

SearchIcon.defaultProps = {
  size: '1rem',
  color: '#3363ED',
};
