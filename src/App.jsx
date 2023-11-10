import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const reactDescriptios = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const actCateg = reactDescriptios[genRandomInt(reactDescriptios.length)];

  return (
    <>
      <Header rDesc={actCateg} />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
