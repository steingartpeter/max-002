const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
};

export default TabButton;
