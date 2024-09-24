export default function MicIcon({
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
      <path
        d="M4.75195 11.9291C5.01778 13.7556 5.93234 15.4253 7.3283 16.6328C8.72426 17.8403 10.5083 18.5049 12.3541 18.5049M12.3541 18.5049C14.1998 18.5049 15.9838 17.8403 17.3798 16.6328C18.7758 15.4253 19.6903 13.7556 19.9562 11.9291M12.3541 18.5049V21.8603"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16748 22.352H15.5405"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3541 2.97052C11.3736 2.97052 10.4333 3.36001 9.74001 4.0533C9.04671 4.7466 8.65723 5.6869 8.65723 6.66737V11.5965C8.65723 12.577 9.04671 13.5173 9.74001 14.2106C10.4333 14.9039 11.3736 15.2934 12.3541 15.2934C13.3345 15.2934 14.2749 14.9039 14.9681 14.2106C15.6614 13.5173 16.0509 12.577 16.0509 11.5965V6.66737C16.0509 5.6869 15.6614 4.7466 14.9681 4.0533C14.2749 3.36001 13.3345 2.97052 12.3541 2.97052Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

MicIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
