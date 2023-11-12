// In this case as we forward HTML element attributes in proxy props: ...props.
const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
};

export default TabButton;
