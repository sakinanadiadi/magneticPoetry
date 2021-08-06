import "./App.css";
import { useState } from "react";
// importing components
import Form from "./Form";
import DisplayWords from "./DisplayWords";
import FunctionWords from "./FunctionWords";
import CreatePoem from "./CreatePoem";
import functionWordArray from "./functionWordArray";
import SavedPoem from "./SavedPoem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRedo, faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
library.add(faRedo, faTimes, faSave);

function App() {
  // creating state for various arrays, search term and a display boolean
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [functionsDisplayed, setFunctionsDisplayed] = useState(false);
  const [words, setWords] = useState([]);
  const [functionArray, setFunctionArray] = useState(functionWordArray);
  const [yourPoem, setYourPoem] = useState([]);

  return (
    <div>
      {/* HEADER SECTION (includes FORM component) */}
      <header className="wrapper">
        <div className="headerContainer">
          <div className="title">
            <h1>Fridge Poetry</h1>
            <p>Choose a theme or search your own!</p>
          </div>
          <Form
            setUserSearchTerm={setUserSearchTerm}
            setFunctionsDisplayed={setFunctionsDisplayed}
          />
        </div>
      </header>

      <main className="wrapper">
        {/* function to display content after search term is submitted */}
        {functionsDisplayed ? (
          <>
            <section className="displaySection">
              {/* Themed words are displayed here */}
              <h2>Theme Words:</h2>
              <DisplayWords
                userSearchTerm={userSearchTerm}
                yourPoem={yourPoem}
                setYourPoem={setYourPoem}
                setWords={setWords}
                words={words}
              />
            </section>

            <div className="flex">
              <section className="functionWords">
                {/* Function words & suffixes are displayed here */}
                <h2>Connecting Words:</h2>
                <FunctionWords
                  yourPoem={yourPoem}
                  setYourPoem={setYourPoem}
                  setFunctionArray={setFunctionArray}
                  functionArray={functionArray}
                />
              </section>

              <section className="poemContainer">
                {/* Created poem is displayed here */}
                <h2>Your Poem:</h2>
                <CreatePoem
                  yourPoem={yourPoem}
                  setYourPoem={setYourPoem}
                  setFunctionArray={setFunctionArray}
                  setFunctionsDisplayed={setFunctionsDisplayed}
                  functionArray={functionArray}
                  setWords={setWords}
                  words={words}
                />
              </section>
            </div>
          </>
        ) : null}

        <section className="savedPoem">
          {/* Saved poems are displayed here */}
          <h2>Saved Poems:</h2>
          <SavedPoem />
        </section>
      </main>

      <footer className="wrapper">
        <p>
          Created at <a href="https://junocollege.com">Juno College</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
