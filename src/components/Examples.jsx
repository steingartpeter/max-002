import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    // selected button? 'dsomponent, 'jsx','props','state'
    setSelectedTopic(selectedButton);
  };

  //<nn>
  // Third option for CONDITIONAL RENDERING: use variable, and update value before
  // renderin according conditions
  //</nn>
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  //<nn>
  // - WORKING WITH MULTIPLE JSX SLOTS
  // As children props is used already for the tabContent, we have to use a different approach for
  // the buttons:
  // Like forward it as a named prop which contains ony JSX code..
  //</nn>
  const buttons = (
    <>
      <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>
        Components
      </TabButton>
      <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>
        JSX
      </TabButton>
      <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>
        Props
      </TabButton>
      <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>
        State
      </TabButton>
    </>
  );

  return (
    <Section title="Examples" id="examples" data-fldnm="section-head">
      {/*
      - SETTING COMP. TYPE DYNAMICALLY 
      buttonsContainer:
      in this case we can send in even the HTML elments type.
      We can use even our own component, but with a bit different syntax: 
      [<Tabs buttonsContainer={Section} buttons={buttons}>]
       */}
      <Tabs buttonsContainer="menu" buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}
