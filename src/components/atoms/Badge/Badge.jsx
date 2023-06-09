/* eslint-disable react/prop-types */
const Badge = ({ title, colors }) => {
  return (
    <span className={`${colors} rounded-sm px-1.5 py-0.5 text-xs`}>{title}</span>
  );
};

export default Badge;
