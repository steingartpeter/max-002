const Tabs = ({ children, buttons, buttonsContainer }) => {
  {
    /*
    The incoming HTML lement/Component names must be converted local varaibles before usage
 */
  }
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
