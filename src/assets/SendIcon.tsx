export default function SendIcon({
  size = '1rem',
  color = '#ffffff',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.70559 6.44629H20.4709C20.8595 6.44629 21.0996 6.87027 20.8996 7.20354L12.9989 20.3714C12.7664 20.7589 12.1801 20.6637 12.082 20.2226L10.6073 13.5864L15.4734 10.3047C15.9847 9.95995 15.5406 9.17601 14.982 9.4373L9.71689 11.9002L4.3802 7.32592C4.02775 7.02382 4.24139 6.44629 4.70559 6.44629Z"
        fill={color}
      />
    </svg>
  );
}

SendIcon.defaultProps = {
  size: '1rem',
  color: '#ffffff',
};
