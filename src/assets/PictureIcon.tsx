export default function PictureIcon({
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
        d="M4.479 20.0645L8.979 15.5645L11.229 17.8145L16.2915 12.752L20.7915 17.252M6.729 21.752H17.979C19.843 21.752 21.354 20.2409 21.354 18.377V7.12695C21.354 5.26299 19.843 3.75195 17.979 3.75195H6.729C4.86504 3.75195 3.354 5.26299 3.354 7.12695V18.377C3.354 20.2409 4.86504 21.752 6.729 21.752Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.88757" cy="8.14484" r="1.32617" fill={color} />
    </svg>
  );
}

PictureIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
