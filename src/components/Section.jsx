const Section = ({ title, children, ...props }) => {
  /* ...props is a proxy props which forwarding the HTML attributes of the caller component */
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
