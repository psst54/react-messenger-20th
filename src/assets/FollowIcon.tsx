export default function FollowIcon({
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
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_2676)">
        <circle
          cx="10.2332"
          cy="5.20042"
          r="2.14155"
          stroke={color}
          strokeWidth="1.3"
        />
        <path
          d="M14.6996 13.1783V13.0168C14.6996 11.1667 13.1998 9.66693 11.3497 9.66693H9.11646C7.26639 9.66693 5.7666 11.1667 5.7666 13.0168V13.1783"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="2.9271"
          y1="5.24369"
          x2="2.9271"
          y2="9.52679"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="0.833594"
          y1="7.40524"
          x2="5.11669"
          y2="7.40524"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_2676">
          <rect
            width="15.6327"
            height="15.6327"
            fill="white"
            transform="translate(0.183594 0.733948)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

FollowIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
