export default function LinkIcon({
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
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.62036 8.49309L3.91912 10.1943C3.28375 10.8297 2.91837 11.6942 2.92505 12.6028C2.93173 13.5114 3.28911 14.3811 3.95462 15.0261C4.59955 15.6916 5.46952 16.049 6.37795 16.0557C7.3071 16.0625 8.15115 15.7177 8.78656 15.0823L10.4878 13.3811M12.6608 11.2496L14.3621 9.54841C14.9974 8.91304 15.3628 8.04853 15.3561 7.13995C15.3494 6.23138 14.9921 5.36159 14.3265 4.71663C13.6818 4.07185 12.8119 3.71445 11.9034 3.70777C10.9948 3.7011 10.1302 4.04573 9.49477 4.68112L7.79353 6.38236M6.56076 12.4057L11.6645 7.30197"
        stroke={color}
        strokeWidth="1.52342"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

LinkIcon.defaultProps = {
  size: '1rem',
  color: '#3363ED',
};
