export default function SendIcon({
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75481 10.7611L11.7581 19.776C11.8718 20.2873 12.5515 20.3976 12.821 19.9485L21.9801 4.68328C22.2119 4.29694 21.9336 3.80542 21.4831 3.80542H3.2068C2.66866 3.80542 2.42099 4.47493 2.82958 4.82515L9.75481 10.7611ZM9.75481 10.7611L21.3476 4.38506"
        stroke={color}
        strokeWidth="1.73"
      />
    </svg>
  );
}

SendIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
