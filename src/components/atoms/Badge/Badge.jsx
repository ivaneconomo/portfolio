/* eslint-disable react/prop-types */
const Badge = ({ title, colors }) => {
  return (
    <span className={`${colors} rounded-sm px-2 py-0.5 text-xs`}>{title}</span>
  );
};

export default Badge;
