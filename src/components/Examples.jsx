import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";

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
  // let tabContent = <p>Please select a topic</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <Section title="Examples" id="examples">
      {/* id not sent!!! PROXY PROPS => frowarding attributes to custom elements */}
      <menu>
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
      </menu>
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
