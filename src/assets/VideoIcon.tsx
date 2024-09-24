export default function VideoIcon({
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
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.038 17.9264L25.7393 20.7347C26.3303 21.0945 26.9505 20.8825 26.9346 20.1321L26.8946 10.2071C26.8442 9.39255 26.3634 9.17027 25.6556 9.54673L20.0219 12.1071M7.01012 22.9698H17.255C18.7786 22.9698 20.0138 21.7499 20.0138 20.2451L20.038 16.7504L20.0138 9.75493C20.0138 8.25011 18.7786 7.03021 17.255 7.03021H7.01012C5.48649 7.03021 4.25134 8.25011 4.25134 9.75493V20.2451C4.25134 21.7499 5.48649 22.9698 7.01012 22.9698Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

VideoIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
