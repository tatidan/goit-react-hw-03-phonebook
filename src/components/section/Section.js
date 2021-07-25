import React from "react";
import "./Section.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
