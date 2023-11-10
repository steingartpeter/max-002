import "./CoreConcept.css";
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      {/* <img src={props.image} alt={props.title} /> */}
      <h3>{title}</h3>
      {/* <h3>{props.title}</h3> */}
      <p>{description}</p>
      {/* <p>{props.description}</p> */}
    </li>
  );
}

export default CoreConcept;
