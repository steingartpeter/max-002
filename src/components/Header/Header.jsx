import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {props.rDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
