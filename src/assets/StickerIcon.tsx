export default function StickerIcon({
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
      <circle cx="8.48328" cy="10.2097" r="1.29028" fill={color} />
      <circle cx="16.2245" cy="10.2097" r="1.29028" fill={color} />
      <path
        d="M8.42786 14.9407C10.3743 17.3407 15.1003 17.2849 16.7069 14.941"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83838 3.23645H16.8694C19.6308 3.23645 21.8694 5.47503 21.8694 8.23645V13.9585C21.8694 14.4895 21.6582 14.9987 21.2824 15.3739L14.9629 21.6828C14.588 22.0572 14.0798 22.2675 13.5499 22.2675H7.83838C5.07695 22.2675 2.83838 20.0289 2.83838 17.2675V8.23645C2.83838 5.47503 5.07696 3.23645 7.83838 3.23645Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M13.8364 21.6807V19.4771C13.8364 16.7156 16.075 14.4771 18.8364 14.4771H21.5887"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

StickerIcon.defaultProps = {
  size: '1rem',
  color: '#000000',
};
